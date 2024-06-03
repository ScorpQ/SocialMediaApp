const { getPosts } = require('./model')


const AuthController = {

    getPost: async (req, res, next) => {
        try {
            const data = await getPosts(req.body.currentUserID);
            res.status(200).send(data)
        } catch (e) {
            res.status(e.statusCode || 400).send(e.message)
        }
    }   
}

module.exports = AuthController;