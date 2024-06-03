const jwt = require('jsonwebtoken');
// jwt.verify(token, secretOrPublicKey, [options, callback])

const authentication = (req, res, next) => {
    console.log(req.X)
    console.log(jwt)
    next()
    // BURADA KALDIN... evet req.X taşınıyor.
};


module.exports = {authentication}