//https://www.reddit.com/r/node/comments/o2zr8m/how_to_retrieve_value_returned_by_a_callback/
//https://engineering.teknasyon.com/callbacks-promises-ve-async-await-nedir-55d319e6a618
//https://www.codecademy.com/learn/introduction-to-javascript/modules/javascript-promises/cheatsheet
const DB = require('../config/mysql');
DB.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + DB.threadId);
});

const checkCredentials = (newCredentials) => {
    const q = 'SELECT * FROM users WHERE user_name = ?';
    return new Promise((myResolve, myReject) => {
        DB.query(q, [newCredentials.user_name], (error, result) => {
            if (error) {
                myReject(error);
            } else if (result.length) {
                console.log(result)
                const ERR = new Error('This name is already used.');
                ERR.statusCode = 409;
                myReject(ERR);
            } else {
                myResolve(true)
            }
        });
    });
};


//https://www.reddit.com/r/node/comments/o2zr8m/how_to_retrieve_value_returned_by_a_callback/
//https://engineering.teknasyon.com/callbacks-promises-ve-async-await-nedir-55d319e6a618
// Register ve diğer methodlarda promise yapısı kullandık.
// Asenkron bir durum için değil, DB.query içerisindeki callback'in çıktısındaki
// değeri kullanmamız lazımdı. Bunu exract edebilmek için Promise yapısı kullandık.

//NOT: Promise kullanma sebebimizi yukarıda yazdım. Callback'in çıktısına ihtiyaç duyuyorduk.
// Fakat sadece callback'in çıktısını alabilmek için mi promise kullandık yoksa
// callback içerisindeki DB işlemimiz bir asenkron işlem miydi o yüzden mi kullandık bilinmiyor.
// TEST ET VE ÖĞREN.
/*
 const registerNewUser = (newCredentials) => {
    const q = "INSERT INTO users (users_id, name, password, email, user_name) VALUES (?, ?, ?, ?, ?)"
    return new Promise((myResolve, myReject) => {
        DB.query(q, [newCredentials.users_id,
            newCredentials.name,
            newCredentials.password,
            newCredentials.email,
            newCredentials.user_name
        ], (error, result) => {
            if (error) {
                console.log(error)
                myReject(error)
            } else {
                myResolve(result)
            }
        });
    })
}
*/


const registerNewUser = (newCredentials) => {
    const q = 'INSERT INTO users SET ?'
    const data = {
        users_id: newCredentials.users_id,
        name: newCredentials.name,
        password: newCredentials.password,
        email: newCredentials.email,
        user_name: newCredentials.user_name
    }
    return new Promise((myResolve, myReject) => {
        DB.query(q,data, (error, result) => {
            if (error) {
                myReject(error);
            } else {
                myResolve(result)
            }
        });
    })
}


module.exports = {registerNewUser, checkCredentials}