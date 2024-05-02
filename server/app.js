// type 'nodemon app.js' for initilize project
var cors = require('cors')
const express = require('express');
const auth = require('./middleware/auth')
const bodyParser = require('body-parser');
require('dotenv').config()


const app = express();
const PORT  = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    req.X = "SS"; // Bunu taşıyıp başka dosyada da kullanabiliyor muyuz diye kontrol ettim.
    next();
});

app.use('/auths' , require('./auths/route'));
/*
app.use('/comments', require('./comments/route'));
app.use('/likes', require('./likes/route'));
app.use('/posts', require('./posts/route'));
app.use('/users', require('./users/route'));
*/

// A GET request is made to 'http://localhost:4000' for checking.
app.get('/', auth.authentication , (req, res) => {
    res.status(200).send(`${req.X} and Succes.`);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})