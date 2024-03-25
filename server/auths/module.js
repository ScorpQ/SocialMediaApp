const DB = require('../config/mysql');


DB.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + DB.threadId);
});

const data = (req, res, next) => {
    DB.query('SELECT * FROM users', (error, result) => {
        if (error) {
            console.error('Error fetching users from the database: ' + error.stack);
            return res.status(500).json({ error: 'Failed to fetch users' });
        }

        res.send(result[1].name);
    })
}


module.exports = { data }



/*
// Define a GET route
app.get('/api/users', (req, res) => {

    // Fetch users from the database
  DB.query('SELECT * FROM users', (error, results) => {

    // Send the fetched data as a response
     res.json(results);
  });
});
 */