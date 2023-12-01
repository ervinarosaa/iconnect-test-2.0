const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const libraryRoutes = require('./libraryRoutes');

app.use(express.json());
app.use(libraryRoutes);

app.get('/', (req, res) => {
  console.log('Response success');
  res.send('Response Success!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
