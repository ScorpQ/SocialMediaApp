const DB = require('../config/mysql');
const {checkCredentials, logIn, registerNewUser} = require('./model')


//There is no logic.
const AuthController = {

    register: async (req, res, next) => {
        try {
            if (await checkCredentials(req.body)) {
                res.send(await registerNewUser(req.body))
            }
        } catch (e) {
            res.status(e.statusCode || 400).send(e.message)
        }
    },

    login: async (req, res, next) => {
        try {
            res.send(await logIn(req.body))
        } catch (e) {
            res.status(e.statusCode || 400).send(e.message)
        }
    }
}

module.exports = AuthController;