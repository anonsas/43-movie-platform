const express = require('express');
const app = express();
const cors = require('cors');
const md5 = require('js-md5');
const uuid = require('uuid');
const PORT = 4000;

app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// AUTHENTICATION--------------------------------
const con = require('./config/database').databaseConnection;

const doAuth = function (req, res, next) {
  if (0 === req.url.indexOf('/admin')) {
    // admin
    const sql = `
      SELECT
      username, role
      FROM users
      WHERE session = ?
  `;
    con.query(sql, [req.headers['authorization'] || ''], (err, results) => {
      if (err) throw err;
      if (!results.length || results[0].role !== 'admin') {
        res.status(401).send({});
        req.connection.destroy();
      } else {
        next();
      }
    });
  } else if (0 === req.url.indexOf('/login-check') || 0 === req.url.indexOf('/login')) {
    next();
  } else {
    // front
    const sql = `
      SELECT
      username, role
      FROM users
      WHERE session = ?
  `;
    con.query(sql, [req.headers['authorization'] || ''], (err, results) => {
      if (err) throw err;
      if (!results.length) {
        res.status(401).send({});
        req.connection.destroy();
      } else {
        next();
      }
    });
  }
};
app.use(doAuth);

// AUTH
app.get('/login-check', (req, res) => {
  let sql;
  let requests;
  if (req.query.role === 'admin') {
    sql = `
      SELECT
      username
      FROM users
      WHERE session = ? AND role = ?
      `;
    requests = [req.headers['authorization'] || '', req.query.role];
  } else {
    sql = `
      SELECT
      username
      FROM users
      WHERE session = ?
      `;
    requests = [req.headers['authorization'] || ''];
  }
  con.query(sql, requests, (err, result) => {
    if (err) throw err;
    if (!result.length) {
      res.send({ msg: 'error' });
    } else {
      res.send({ msg: 'ok' });
    }
  });
});

app.post('/login', (req, res) => {
  const key = uuid.v4();
  const sql = `
  UPDATE users
  SET session = ?
  WHERE username = ? AND pass = ?
`;
  con.query(sql, [key, req.body.user, md5(req.body.pass)], (err, result) => {
    if (err) throw err;
    if (!result.affectedRows) {
      res.send({ msg: 'error', key: '' });
    } else {
      res.send({ msg: 'ok', key });
    }
  });
});

// IMPORTED ROUTES ==================
const HomeRoutes = require('./routes/Home');
app.use('/', HomeRoutes);

const CategoryRoutes = require('./routes/Category');
app.use('/categories', CategoryRoutes);

const MovieRoutes = require('./routes/Movie');
app.use('/movies', MovieRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
