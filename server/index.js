const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'cruddatabase'
})

app.use(bodyParser.urlencoded({extended: true}))

app.post('/novoProtocolo', (req, res) => {
    const cd_prf_und = req.body.cd_prf_und;
    const cd_agrup_prc = req.body.cd_agrup_prc;
    const cd_tip_prc = req.body.cd_tip_prc;
    const cd_tip_atvd = req.body.cd_tip_atvd;
    const cd_detalhe_ocr = req.body.cd_detalhe_ocr;
    const cd_cli = req.body.cd_cli;
    const identific1 = req.body.identific1;
    const identific2 = req.body.identific2;
    const identific3 = req.body.identific3;

    db.query('INSERT INTO tb_prc (CD_PRF_UND, CD_AGRUP_PRC, CD_TIP_PRC, CD_TIP_ATVD, CD_DETALHE_OCR, CD_CLI, IDENTIFIC1, IDENTIFIC2, IDENTIFIC3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [cd_prf_und, cd_agrup_prc, cd_tip_prc, cd_tip_atvd, cd_detalhe_ocr, cd_cli, identific1, identific2, identific3], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
    })  
})

app.get('/listaProcessos', (req, res) => {
    db.query("SELECT * FROM tb_prc", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
})

app.delete('/excluirProcesso/:cd_prc', (req, res) => {
    const cd_prc = req.params.cd_prc
    const sqlDelete = "DELETE FROM tb_prc WHERE CD_PRC = ?";
    db.query(sqlDelete, cd_prc, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Registro removido");
        }
    })
})

app.put('/editarProcesso', (req, res) => {
    const cd_prc = req.body.cd_prc
    const cd_prf_und = req.body.cd_prf_und;
    const cd_agrup_prc = req.body.cd_agrup_prc;
    const cd_tip_prc = req.body.cd_tip_prc;
    const cd_tip_atvd = req.body.cd_tip_atvd;
    const cd_detalhe_ocr = req.body.cd_detalhe_ocr;
    const cd_cli = req.body.cd_cli;
    const identific1 = req.body.identific1;
    const identific2 = req.body.identific2;
    const identific3 = req.body.identific3;
    const sqlUpdate = "UPDATE tb_prc SET CD_PRF_UND = ?, CD_AGRUP_PRC = ?, CD_TIP_PRC =?, CD_TIP_ATVD = ?, CD_DETALHE_OCR = ?, CD_CLI = ?, IDENTIFIC1 = ?, IDENTIFIC2 = ?, IDENTIFIC3 = ? WHERE CD_PRC = ?";

    db.query(sqlUpdate, [cd_prf_und, cd_agrup_prc, cd_tip_prc, cd_tip_atvd, cd_detalhe_ocr, cd_cli, identific1, identific2, identific3, cd_prc], (err, result) => {
        if (err) {
            console.log(err);
        }
    })
})

app.listen(5000, () => {
    console.log("Conectado ao servidor.");
})