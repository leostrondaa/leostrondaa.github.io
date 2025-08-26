const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('fodeo!');
});
module.exports = app;
