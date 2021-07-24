import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">
                </span>
                <div className="cabecalho-container">
                    <Link to="/" className="flex flex--centro">
                        <h1 className="cabecalho__titulo">Organizador de Demandas</h1>
                    </Link>
                </div>    
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link to="/" className="menu-item menu-item--titulo">Processos</Link></li>
                    <li><Link to="/tipos-de-atividade" className="menu-item">Tipos de Atividade</Link></li>
                    <li><Link to="/tipos-de-processo" className="menu-item">Tipos de Processo</Link></li>
                    <li><Link to="/agencias" className="menu-item">Agências</Link></li>
                    <li><Link to="/etapas" className="menu-item">Etapas</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho