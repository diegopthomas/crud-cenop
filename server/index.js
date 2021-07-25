const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'cruddatabase'
})

app.post('/novoProtocolo', (req, res) => {
    const cd_prf_und = req.body.cd_prf_und;
    const cd_agrup_prc = req.body.cd_agrup_prc;
    const cd_tip_prc = req.body.cd_tip_prc;
    const CD_TIP_ATVD = req.body.CD_TIP_ATVD;
    const cd_detalhe_ocr = req.body.cd_detalhe_ocr;
    const cd_cli = req.body.cd_cli;
    const identific1 = req.body.identific1;
    const identific2 = req.body.identific2;
    const identific3 = req.body.identific3;

    db.query('INSERT INTO tb_prc (CD_PRF_UND, CD_AGRUP_PRC, CD_TIP_PRC, CD_TIP_ATVD, CD_DETALHE_OCR, CD_CLI, IDENTIFIC1, IDENTIFIC2, IDENTIFIC3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [cd_prf_und, cd_agrup_prc, cd_tip_prc, CD_TIP_ATVD, cd_detalhe_ocr, cd_cli, identific1, identific2, identific3], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Valores inseridos.")
        }
    })  
})

app.get('/ListaProcessos', (req, res) => {
    db.query("SELECT * FROM tb_prc", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.listen(5000, () => {
    console.log("FOI!");
})