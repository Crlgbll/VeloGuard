// api/users.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM users';

  req.db.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
