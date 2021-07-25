import React, { useState } from 'react'
import Axios from 'axios'


const ListaProcessos = () => {
    
    const [listaProcessos, setListaProcessos] = useState([]);
    const listarProcessos = () => {

        Axios.get("http://localhost:5000/ListaProcessos").then((response) => {
            setListaProcessos (response.data)
        })
    }

    return (
        <div className="container">
            <button onClick={listarProcessos}>Listar Processos</button>
            {listaProcessos.map((val, key) => {
                return (
                    <div className="processo">{val.cd_prf_und}</div>
                )
            })}
        </div>
    )
}

export default ListaProcessos