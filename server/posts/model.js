const DB = require('../config/mysql');

const getPosts = (userId) => {
    const q = `SELECT p.post_id, p.user_id, p.desc FROM users U
    JOIN posts P ON U.users_id = P.user_id
    JOIN relationships R ON P.user_id = R.followed_id
    WHERE R.followeryou_id = ?`;
    
    return new Promise((myResolve, myReject) => {
        DB.query(q, [userId], (error, result) => {
            if (error) {
                console.log(error.message)
                myReject(error);
            }else {
                myResolve(result)
            }
        });
    })
};

module.exports = {getPosts}