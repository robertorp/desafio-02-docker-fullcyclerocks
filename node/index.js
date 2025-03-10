const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)

    // Check if 'people' table exists, if not create it
    const checkTableSql = `
        CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `;
    connection.query(checkTableSql, (error) => {
        if (error) {
            console.error('Error creating table:', error);
            return res.status(500).send('Error setting up database');
        }
        
        // Insert a new name
        const name = 'Full Cycle Rocks!';
        const insertSql = `INSERT INTO people(name) values(?)`;
        connection.query(insertSql, [name], (insertError) => {
            if (insertError) {
                console.error('Error inserting data:', insertError);
                return res.status(500).send('Error inserting data');
            }
            
            // Get all names
            connection.query('SELECT * FROM people', (selectError, results) => {
                connection.end();
                
                if (selectError) {
                    console.error('Error fetching data:', selectError);
                    return res.status(500).send('Error fetching data');
                }
                
                let namesList = '';
                results.forEach(person => {
                    namesList += `<li>${person.name}</li>`;
                });
                
                res.send(`
                    <h1>Full Cycle Rocks!</h1>
                    <h2>Names list:</h2>
                    <ul>${namesList}</ul>
                `);
            });
        });
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})