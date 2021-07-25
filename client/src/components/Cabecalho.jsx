import React from 'react'
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">
                </span>
                <div className="cabecalho-container">
                </div>    
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><button to="/" className="menu-item menu-item--titulo">Listar Processos</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho