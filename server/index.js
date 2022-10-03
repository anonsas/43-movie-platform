const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const con = require('./config/database').databaseConnection;

// ROUTES ===========================
// suppliers and consumers
// app.get('/', (req, res) => {
//   const sql = `
//   SELECT *, suppliers.id AS supID, suppliers.name AS supName, suppliers.kw_price
//   FROM suppliers
//   INNER JOIN consumers
//   ON consumers.supplier_id = suppliers.id
//   `;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// IMPORTED ROUTES ==================
const CategoryRoutes = require('./routes/Category');
app.use('/categories', CategoryRoutes);

// const ConsumersRoutes = require('./routes/Consumers');
// app.use('/consumers', ConsumersRoutes);

// const BillsRoutes = require('./routes/Bills');
// app.use('/bills', BillsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
