const DB = require('../config/mysql');
const {getUser} = require('./model')


//There is no logic.
const AuthController = {
    register: async (req, res, next) => {
        try {
            res.send(await getUser(req.body.name))
        } catch (e) {
            res.status(e.statusCode || 400).send(e.message)
        }
    },

    login: async (req, res, next) => {
        try {
            res.send(await getUser(req.body.name))
        } catch (e) {
            res.status(e.statusCode || 400).send(e.message)
        }
    }
}

module.exports = AuthController;