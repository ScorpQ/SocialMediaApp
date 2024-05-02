

const authentication = (req, res, next) => {
    console.log(req.X)
    next()
    // BURADA KALDIN... evet req.X taşınıyor.
};


module.exports = {authentication}

//Enes neden burada router.use demiş?