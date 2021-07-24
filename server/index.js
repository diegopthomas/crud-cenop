const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'cruddatabase'
})

app.get('/novoProtocolo', (req, res) => {
    const cd_prf_un = 1981;

    db.query('INSERT INTO tb_prc (CD_PRF_UN) VALUES (?)', 
    cd_prf_un, 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Valores inseridos.")
        }
    })  
})

app.listen(5000, () => {
    console.log("FOI!");
})