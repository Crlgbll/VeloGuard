// api/users.js

import express from 'express'
import { db } from '../Backend/Database.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM tbl_user';

  db.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

//signup
router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    db.query(`SELECT carsu_email FROM tbl_user WHERE carsu_email = '${email}'`, (error, result) => {
      if (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (result.length > 0) {
          return res.status(401).json({ msg: 'Email already exists' });
        }

        const salt = 10;
        const hashPassword = async () => {
          const hash = await bcrypt.hash(password, salt);
          return hash;
        };

        hashPassword()
          .then((password) => {
            db.query(
              `INSERT INTO tbl_user (carsu_email, password) VALUES ('${email}', '${password}')`,
              (err) => {
                if (err) {
                  console.error('Error fetching users:', error);
                  res.status(500).json({ error: 'Internal Server Error' });
                }

                return res.status(201).json({ email, password, message: 'User successfully signed in' });
              }
            );
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      }
    });
  } catch (err) {
    console.error(err);
  }
});

export { router as userRouter }
