const modal = require('./modal')
const mysql = require("mysql");
const getAllUser = (req, res, next) => {

    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    })

    connection.connect()

    connection.query('SELECT * FROM users' +
        '', (err, rows, fields) => {
        if (err) throw err
        console.log(rows[0].name)
        res.send(rows[0].name);
    })

    connection.end()

}


module.exports = { getAllUser };