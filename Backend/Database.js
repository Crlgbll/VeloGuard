// db.js

import mysql from 'mysql'
import express from 'express';

import { userRouter } from '../api/users.js';

const app = express();
app.use(express.json())
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username // Replace with your MySQL password
  database: 'veloguard' // Replace with your MySQL database name
});

app.use("/user", userRouter);

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

export { db }
