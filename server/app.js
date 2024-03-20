// type 'nodemon app.js' for initilize project
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const PORT  = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/auths', require('./auths/route'));
app.use('/comments', require('./comments/route'));
app.use('/likes', require('./likes/route'));
app.use('/posts', require('./posts/route'));
app.use('/users', require('./users/route'));

app.get('/', (req, res) => {
    res.status(200).send('Succes.');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
//const envelopes = require('./router/envelopes')
//app.use('/envelopes', envelopes);