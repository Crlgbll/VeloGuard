// db.js

import mysql from 'mysql'
import express from 'express';
<<<<<<< HEAD
import cors from 'cors';
=======
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef

import { userRouter } from '../api/users.js';

const app = express();
app.use(express.json())
<<<<<<< HEAD

app.use(cors())
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'carlogaballo', // Replace with your MySQL username 
  password: 'Password1234',// Replace with your MySQL password
  database: 'veloguard' // Replace with your MySQL database name
});

app.use("/users", userRouter);
=======
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username // Replace with your MySQL password
  database: 'veloguard' // Replace with your MySQL database name
});

app.use("/user", userRouter);
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef

db.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

app.listen(3001, () => {
  console.log("server running at port");
})

<<<<<<< HEAD
export { db }
=======
export { db }
>>>>>>> fee4e7364ed6ad3aab4f6bcb69f782a3eb48ccef
