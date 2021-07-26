import React, { useEffect, useState } from 'react'
import CriarProcesso from '../components/CriarProcesso'
import { Button, Input, Table } from 'reactstrap';
import { PencilSquare, PlusCircle, PlusSquare } from 'react-bootstrap-icons';
import Axios from 'axios'



const Home = () => {

  const [listaProcessos, setListaProcessos] = useState([]);

  const [newCd_prf_und, setNewCd_prf_und] = useState("");
  const [newCd_agrup_prc, setNewCd_agrup_prc] = useState("");
  const [newCd_tip_prc, setNewCd_tip_prc] = useState("");
  const [newCd_tip_atvd, setNewCd_tip_atvd] = useState("");
  const [newCd_detalhe_ocr, setNewCd_detalhe_ocr] = useState("");
  const [newCd_cli, setNewCd_cli] = useState("");
  const [newIdentific1, setNewIdentific1] = useState("");
  const [newIdentific2, setNewIdentific2] = useState("");
  const [newIdentific3, setNewIdentific3] = useState("");

  const [showComponent, setShowComponent] = useState(false)
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:5000/listaProcessos').then((response) => {
      setListaProcessos(response.data)
    })
  }, [])

  const excluirProcesso = (id_processo) => {
    Axios.delete(`http://localhost:5000/excluirProcesso/${id_processo}`)
    console.log("Item removido!")
  }

  const editarProcesso = (id_processo) => {
    Axios.put("http://localhost:5000/editarProcesso", {
      cd_prc: id_processo,
      cd_prf_und: newCd_prf_und,
      cd_agrup_prc: newCd_agrup_prc,
      cd_tip_prc: newCd_tip_prc,
      cd_tip_atvd: newCd_tip_atvd,
      cd_detalhe_ocr: newCd_detalhe_ocr,
      cd_cli: newCd_cli,
      identific1: newIdentific1,
      identific2: newIdentific2,
      identific3: newIdentific3
    })
    setNewCd_prf_und("")
    setNewCd_agrup_prc("")
    setNewCd_tip_prc("")
    setNewCd_tip_atvd("")
    setNewCd_detalhe_ocr("")
    setNewCd_cli("")
    setNewIdentific1("")
    setNewIdentific2("")
    setNewIdentific3("")
  }


  return (
    <main>
      <header>
        <h1>Lista de Processos</h1>
      </header>
      {
      showComponent ? <CriarProcesso /> : null
      }
      <div>

        <Button className="botao" size="lg" color="primary" onClick={
          () => setShowComponent(!showComponent)
        }><PlusCircle /> Incluir Novo Protocolo</Button>
          
        <Button className="botao" size="lg" color="warning" onClick={
          () => setShowInput(!showInput)
        }><PencilSquare /> Editar Dados</Button>
      </div>

        <Table>
          <thead>
            <tr>
              <th>Código do Processo</th>
              <th>Prefixo Solicitante</th>
              <th>Cód. Agrupador Proc.</th>
              <th>Cód. Tipo Proc.</th>
              <th>Cód. Tipo Ativ.</th>
              <th>Cód. Detalhe Ocor.</th>
              <th>Cód. Cliente</th>
              <th>Identificador 1</th>
              <th>Identificador 2</th>
              <th>Identificador 3</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listaProcessos.map((val, key) => {
              return (
                <tr key={key}>
                  <td> {val.CD_PRC} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewCd_prf_und(e.target.value)
                    }}></Input> : null}

                    {val.CD_PRF_UND} </td>

                  <td>

                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewCd_agrup_prc(e.target.value)
                    }}></Input> : null}
                    {val.CD_AGRUP_PRC} </td>

                  <td>

                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewCd_tip_prc(e.target.value)
                    }}></Input> : null}
                    {val.CD_TIP_PRC} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewCd_tip_atvd(e.target.value)
                    }}></Input> : null}
                    {val.CD_TP_ATVD} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewCd_detalhe_ocr(e.target.value)
                    }}></Input> : null}
                    {val.CD_DETALHE_OCR} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewCd_cli(e.target.value)
                    }}></Input> : null}
                    {val.CD_CLI} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewIdentific1(e.target.value)
                    }}></Input> : null}
                    {val.IDENTIFIC1} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewIdentific2(e.target.value)
                    }}></Input> : null}
                    {val.IDENTIFIC2} </td>

                  <td>
                    {showInput ? <Input bsSize="sm" onChange={(e) => {
                    setNewIdentific3(e.target.value)
                    }}></Input> : null}
                    {val.IDENTIFIC3} </td>

                  <td>
                    {showInput ? <Button color="success" size="sm" onClick={() => { editarProcesso(val.CD_PRC) }}>Alterar</Button> : null}
                  </td>
                  <td>
                    {showInput ? <Button color="danger" size="sm" onClick={() => { excluirProcesso(val.CD_PRC) }}>Excluir</Button> : null}
                  </td>
                </tr>
              )
            })}
          </tbody>

        </Table>


    </main>
  )
}

export default Home
