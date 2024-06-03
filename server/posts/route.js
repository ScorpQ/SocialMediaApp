const posts = require('express').Router();
const postsController = require('./controllers')

posts.post('/', postsController.getPost);

module.exports = posts;