import React, { useEffect, useState } from 'react'
import CriarProcesso from '../components/CriarProcesso'
import Axios from 'axios'
import '../assets/css/base/base.css'


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
      <div className="container">
        <h2 className="titulo-pagina">Lista de Processos</h2>
      </div>
      <CriarProcesso />
      <div className="container">
        <table>
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
            </tr>
          </thead>
          <tbody>
            {listaProcessos.map((val, key) => {
              return (
                <tr key={key}>
                  <td> {val.CD_PRC} </td>

                  <td><input onChange={(e) => {
                    setNewCd_prf_und(e.target.value)
                  }}></input> {val.CD_PRF_UND} </td>

                  <td><input onChange={(e) => {
                    setNewCd_agrup_prc(e.target.value)
                  }}></input> {val.CD_AGRUP_PRC} </td>

                  <td><input onChange={(e) => {
                    setNewCd_tip_prc(e.target.value)
                  }}></input> {val.CD_TIP_PRC} </td>

                  <td><input onChange={(e) => {
                    setNewCd_tip_atvd(e.target.value)
                  }}></input> {val.CD_TP_ATVD} </td>

                  <td><input onChange={(e) => {
                    setNewCd_detalhe_ocr(e.target.value)
                  }}></input> {val.CD_DETALHE_OCR} </td>

                  <td><input onChange={(e) => {
                    setNewCd_cli(e.target.value)
                  }}></input> {val.CD_CLI} </td>

                  <td><input onChange={(e) => {
                    setNewIdentific1(e.target.value)
                  }}></input> {val.IDENTIFIC1} </td>

                  <td><input onChange={(e) => {
                    setNewIdentific2(e.target.value)
                  }}></input> {val.IDENTIFIC2} </td>

                  <td><input onChange={(e) => {
                    setNewIdentific3(e.target.value)
                  }}></input> {val.IDENTIFIC3} </td>

                  <td>
                    <button onClick={() => { editarProcesso(val.CD_PRC) }}>Confirmar</button>
                  </td>
                  <td>
                    <button>Editar</button>
                  </td>
                  <td>
                    <button onClick={() => { excluirProcesso(val.CD_PRC) }}>Excluir</button>
                  </td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

    </main>
  )
}

export default Home
