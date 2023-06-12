// db.js

const mysql = require('mysql');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'your_username', // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'your_database_name' // Replace with your MySQL database name
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

app.use((req, res, next) => {
  req.db = connection;
  next();
});

module.exports = app;
