const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const token = req.cookies;
    const ZATKN = req.headers.zaaa 
    console.log(ZATKN)
    //const AA = jwt.verify(token, "secretKey") BURADA HATA VAR CUNKU TOKEN BOŞ...
    next()
    // BURADA KALDIN... evet req.X taşınıyor.
};  


module.exports = {authentication}