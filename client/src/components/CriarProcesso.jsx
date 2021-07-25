import React, { useState } from 'react'
import Axios from 'axios'
import '../assets/css/componentes/botao.css'
import '../assets/css/componentes/inputs.css'

const CriarProcesso = () => {

    const [cd_prf_und, setCd_prf_und] = useState("");
    const [cd_agrup_prc, setCd_agrup_prc] = useState("");
    const [cd_tip_prc, setCd_tip_prc] = useState("");
    const [cd_tip_atvd, setCd_tip_atvd] = useState("");
    const [cd_detalhe_ocr, setCd_detalhe_ocr] = useState("");
    const [cd_cli, setCd_cli] = useState("");
    const [identific1, setIdentific1] = useState("");
    const [identific2, setIdentific2] = useState("");
    const [identific3, setIdentific3] = useState("");

    const cadastrar = () => {
        Axios.post('http://localhost:5000/novoProtocolo', {
            cd_prf_und: cd_prf_und, 
            cd_agrup_prc: cd_agrup_prc, 
            cd_tip_prc: cd_tip_prc, 
            cd_tip_atvd: cd_tip_atvd, 
            cd_detalhe_ocr: cd_detalhe_ocr, 
            cd_cli: cd_cli, 
            identific1: identific1, 
            identific2: identific2, 
            identific3: identific3
        }).then(() => {
            console.log("Sucesso!");
        })
    }

    return (

        <div className="formulario container input-container">
            <p>
                <label>Prefixo solicitante</label>
                <input type="text" onChange={(event) => {
                    setCd_prf_und(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Agrupador do Processo</label>
                <input type="text" onChange={(event) => {
                    setCd_agrup_prc(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Processo</label>
                <input type="text" onChange={(event) => {
                    setCd_tip_prc(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Atividade</label> 
                <input type="text" onChange={(event) => {
                    setCd_tip_atvd(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Detalhe</label> 
                <input type="text" onChange={(event) => {
                    setCd_detalhe_ocr(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Código do cliente</label>
                <input type="text" onChange={(event) => {
                    setCd_cli(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Identificador 1</label>
                <input type="text" onChange={(event) => {
                    setIdentific1(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Identificador 2</label>
                <input type="text" onChange={(event) => {
                    setIdentific2(event.target.value);
                }}></input>
            </p>
            <p>
                <label>Identificador 3</label>
                <input type="text" onChange={(event) => {
                    setIdentific3(event.target.value);
                }}></input>
            </p>
            <p>
                <button className="botao" onClick={cadastrar}>Cadastrar</button>
            </p>
        </div>

    )
}

export default CriarProcesso