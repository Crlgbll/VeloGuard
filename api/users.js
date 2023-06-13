// api/users.js

<<<<<<< HEAD
import express from "express";
import { db } from "../Backend/Database.js";
import bcrypt from "bcrypt";

const router = express.Router();


router.get("/", (req, res) => {
  const sql = "SELECT * FROM tbl_user";

=======
import express from 'express'
import { db } from '../Backend/Database.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM tbl_user';

>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

//signup
<<<<<<< HEAD
router.post("/signup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user_type = req.body.user_type;

  try {
    db.query(
      `SELECT carsu_email FROM tbl_user WHERE carsu_email = '${email}'`,
      (error, result) => {
        if (error) {
          console.error("Error fetching users:", error);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          if (result.length > 0) {
            return res.status(401).json({ msg: "Email already exists" });
          }

          const salt = 10;
          const hashPassword = async () => {
            const hash = await bcrypt.hash(password, salt);
            return hash;
          };

          hashPassword()
            .then((password) => {
              db.query(
                `INSERT INTO tbl_user (name, carsu_email, password, u_type) VALUES ('${name}', '${email}', '${password}', '${user_type}' )`,
                (err) => {
                  if (err) {
                    console.error("Error fetching users:", error);
                    res.status(500).json({ error: "Internal Server Error" });
                  }

                  return res
                    .status(201)
                    .json({
                      email,
                      password,
                      message: "User successfully signed in",
                    });
                }
              );
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({ error: "Internal Server Error" });
            });
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
});

// signin
router.post("/signin", async (req, res) => {
=======
router.post('/signup', (req, res) => {
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
  const email = req.body.email;
  const password = req.body.password;

  try {
<<<<<<< HEAD
    const query = `SELECT carsu_email, password, u_type FROM tbl_user WHERE carsu_email = '${email}'`;
    db.query(query, [email], async (error, result) => {
      if (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (result.length === 0) {
        return res.status(401).json({ msg: "User not found" });
      }

      const savedPassword = result[0].password;
      const user_type = result[0].u_type;

      try {
        const match = await bcrypt.compare(password, savedPassword);
        if (!match) {
          return res.status(401).json({});
        }
        
        const isMatchUserType = await compare(user_type, result[0].u_type);
        if (!isMatchUserType) {
          console.log('User not found');
          return res.status(401).json({});
        } else {
          if (user_type === 'staff') {
            console.log('Staff user authenticated');
            // Additional logic for staff user
          } else if (user_type === 'student') {
            console.log('Student user authenticated');
            // Additional logic for student user
          }
        }
        
          const token = generateToken(); // Replace with your token generation logic
          return res.status(200).json({ token: token });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
=======
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
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
      }
    });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
    return res.status(500).json({ error: "Internal Server Error" });
  }
});



export { router as userRouter };
=======
  }
});

export { router as userRouter }
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
