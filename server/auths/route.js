//https://www.scaler.com/topics/expressjs-tutorial/MYSQL_with_express_js/
//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
const auths = require('express').Router();
const controller = require('./controllers');

const  AuthController  = require('./controllers');

auths.post('/register', AuthController.register);
auths.post('/login', AuthController.login);
/*
auths.post('/login', login);
auths.post('/logout', logout);
 */


module.exports = auths;