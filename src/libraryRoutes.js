const express = require('express');
const mysql = require('mysql2'); //

const router = express.Router();

// const LibraryHandler = require('./libraryHandler');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iconnectdb',
});

// GET ALL WORDS
// router.get('/', LibraryHandler.getAllWords);

router.get('/library', (req, res) => {
  const query = 'SELECT * FROM library';
  connection.query(query, (err, rows) => {
    if (err) {
      res.status(500).send({
        message: err.sqlMessage,
      });
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
