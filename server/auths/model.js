const DB = require('../config/mysql');

DB.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + DB.threadId);
});

// Register ve diğer methodlarda promise yapısı kullandık.
// Asenkron bir durum için değil, DB.query içerisindeki callback'in çıktısındaki
// değeri kullanmamız lazımdı. Bunu exract edebilmek için Promise yapısı kullandık.

//NOT: Promise kullanma sebebimizi yukarıda yazdım. Callback'in çıktısına ihtiyaç duyuyorduk.
// Fakat sadece callback'in çıktısını alabilmek için mi promise kullandık yoksa
// callback içerisindeki DB işlemimiz bir asenkron işlem miydi o yüzden mi kullandık bilinmiyor.
// TEST ET VE ÖĞREN.
const getUsers = async (name) => {
    const q = 'SELECT * FROM users WHERE name = ?';

    let myPromise = await new Promise(function (myResolve, myReject) {
        DB.query(q, [name], (error, result) => {
            myResolve(result);
        })
    });
    return myPromise;
}

module.exports = {getUsers}