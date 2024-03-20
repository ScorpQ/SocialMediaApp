//https://www.scaler.com/topics/expressjs-tutorial/MYSQL_with_express_js/
const express = require('express');
const mysql = require('mysql');
const users = require('express').Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iyioyunlar',
    database: 'social'
})
connection.connect()

connection.query('SELECT * FROM users' +
    '', (err, rows, fields) => {
    if (err) throw err

    console.log(rows[0].name)
})

connection.end()

module.exports = users;