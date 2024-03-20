const users = require('express').Router();

users.get('/', function(req, res) {
    res.send('Hello from LIKES root route.');
});

module.exports = users;