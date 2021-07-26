import React, { useState } from 'react'
import Axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Check, CheckCircle, CheckLg, CheckSquareFill } from 'react-bootstrap-icons';

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

            <Form>


                <h4>Cadastrar Novo Processo</h4>
                <FormGroup>

                    <Label>Prefixo Solicitante</Label>
                    <Input placeholder="0000" type="text" onChange={(event) => {
                    setCd_prf_und(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Agrupador do Processo</Label>
                    <Input placeholder="0" type="text" onChange={(event) => {
                        setCd_agrup_prc(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Processo</Label>
                    <Input placeholder="000" type="text" onChange={(event) => {
                        setCd_tip_prc(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Atividade</Label>
                    <Input placeholder="0000" type="text" onChange={(event) => {
                        setCd_tip_atvd(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Detalhe de Atividade</Label>
                    <Input placeholder="00000" type="text" onChange={(event) => {
                        setCd_detalhe_ocr(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>MCI do Cliente</Label>
                    <Input placeholder="000000000" type="text" onChange={(event) => {
                        setCd_cli(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Identificador 1</Label>
                    <Input placeholder="XXXXXXXX" type="text" onChange={(event) => {
                        setIdentific1(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Identificador 2</Label>
                    <Input placeholder="Identificador 2" type="text" onChange={(event) => {
                        setIdentific2(event.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Identificador 3</Label>
                    <Input placeholder="Identificador 3" type="text" onChange={(event) => {
                        setIdentific3(event.target.value);
                    }}></Input>
                </FormGroup>

                <Button className="botao" color="success" onClick={cadastrar}>Confirmar Inclusão</Button>
            </Form>

    )
}

export default CriarProcesso