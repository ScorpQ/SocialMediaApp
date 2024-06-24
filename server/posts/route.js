const posts = require('express').Router();
const postsController = require('./controllers')

posts.post('/', postsController.getPost);
posts.post('/', postsController.sharePost);

module.exports = posts;