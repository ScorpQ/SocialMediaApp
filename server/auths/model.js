//https://www.reddit.com/r/node/comments/o2zr8m/how_to_retrieve_value_returned_by_a_callback/
//https://engineering.teknasyon.com/callbacks-promises-ve-async-await-nedir-55d319e6a618
const DB = require('../config/mysql');

DB.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + DB.threadId);
});

//https://www.reddit.com/r/node/comments/o2zr8m/how_to_retrieve_value_returned_by_a_callback/
//https://engineering.teknasyon.com/callbacks-promises-ve-async-await-nedir-55d319e6a618
// Register ve diğer methodlarda promise yapısı kullandık.
// Asenkron bir durum için değil, DB.query içerisindeki callback'in çıktısındaki
// değeri kullanmamız lazımdı. Bunu exract edebilmek için Promise yapısı kullandık.

//NOT: Promise kullanma sebebimizi yukarıda yazdım. Callback'in çıktısına ihtiyaç duyuyorduk.
// Fakat sadece callback'in çıktısını alabilmek için mi promise kullandık yoksa
// callback içerisindeki DB işlemimiz bir asenkron işlem miydi o yüzden mi kullandık bilinmiyor.
// TEST ET VE ÖĞREN.
const getUser = (name) => {
    const q = 'SELECT * FROM users WHERE name = ?';
        return new Promise((myResolve, myReject) =>  {
            DB.query(q, [name], (error, result) => {
                if(result){
                    const ERR = new Error('Allready used.');
                    ERR.statusCode = 400;
                    myReject (ERR);
                }
                myResolve(result);
            })
        });
}

module.exports = { getUser }