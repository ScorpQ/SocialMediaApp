//https://www.scaler.com/topics/expressjs-tutorial/MYSQL_with_express_js/
//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
const users = require('express').Router();
const controller = require('./controllers');

const { getAllUser } = require('./controllers');

users.get('/', getAllUser);
module.exports = users;