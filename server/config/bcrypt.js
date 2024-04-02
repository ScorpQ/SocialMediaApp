// https://www.npmjs.com/package/bcrypt
// node .\server\config\bcrypt.js
const BCRYPT = require('bcrypt');
//console.log(BCRYPT)

const salt = BCRYPT.genSaltSync(5) // default parameter 10
const hash = BCRYPT.hashSync("data" , salt)
const compare = BCRYPT.compareSync("data", hash)
console.log('Üretilen salt: ' + salt) // zxcvzxvc
console.log('Üretilen hash: ' + hash) // asdfasdf
console.log('Compare sonucu: ' + compare) // true
console.log(BCRYPT.getRounds(hash)) // 5

/*
rounds=8 : ~40 hashes/sec
rounds=9 : ~20 hashes/sec
rounds=10: ~10 hashes/sec
rounds=11: ~5  hashes/sec
rounds=12: 2-3 hashes/sec
rounds=13: ~1 sec/hash
rounds=14: ~1.5 sec/hash
rounds=15: ~3 sec/hash
rounds=25: ~1 hour/hash
rounds=31: 2-3 days/hash
 */