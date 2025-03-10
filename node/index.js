const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

app.get('/', (req,res) => {

    /*const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    // Check if 'people' table exists, if not create it by copiloto code
    const checkTableSql = `
        CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `;
    connection.query(checkTableSql, (error) => {
        if (error) {
            console.error('Error creating table:', error);
        }
    });

    const sql = `INSERT INTO people(name) values('Roberto2')`
    connection.query(sql)
    connection.end()*/

    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})