const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

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
