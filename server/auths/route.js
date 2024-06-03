//https://www.scaler.com/topics/expressjs-tutorial/MYSQL_with_express_js/
//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
const auths = require('express').Router();
const  AuthController  = require('./controllers');


auths.post('/register', AuthController.register);
auths.post('/login', AuthController.login);
auths.post('/logout', AuthController.logOut);


module.exports = auths;