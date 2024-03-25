const modul = require('./module')
const DB = require('../config/mysql');

//There is no logic.
const getAllUser = (req, res, next) => {
    /*
    console.log( await modul.data())
    res.send( modul.data())
    */
    DB.query('SELECT * FROM users', (error, result) => {
        res.send(result[1].name);
    })
}



module.exports = { getAllUser };