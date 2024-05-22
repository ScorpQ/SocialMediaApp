const jwt = require('jsonwebtoken');
const {checkCredentials, logIn, registerNewUser} = require('./model')


//There is no logic.
const AuthController = {

    register: async (req, res, next) => {
        try {
            console.log(req.body)
            console.log(`Bu data axious(method,post,data:X) kodunun data:X kısmına verildi::  data: ${req.body}`)
            if (await checkCredentials(req.body)) {
                res.status(200).send(await registerNewUser(req.body))
            }
        } catch (e) {
            console.log(e.message)
            res.status(e.statusCode || 400).send(e.message)
        }
    },

    login: async (req, res, next) => {
        try {
            const result = await logIn(req.body);
            if(result){

                const TOKEN = jwt.sign({
                    id: result[0].password
                }, "secretKey");

                res.cookie("ZaTokken", TOKEN, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 86400000), // 1 Day = 24 Hrs = 24*60*60 = 86400.
                    sameSite: "none",
                    secure: "production"
                }).status(200).send(result[0]);
            }
        } catch (e) {
            res.status(e.statusCode || 400).send(e.message)
        }
    },

    logOut: async (req, res, next) => {
            res.clearCookie('accesTokken', {
                secure: true,
                sameSite: "none",
            }).status(200).send("Logged out.");
    },
}

module.exports = AuthController;