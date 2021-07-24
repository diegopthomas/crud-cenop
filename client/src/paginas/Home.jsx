import React from 'react'
import CriarProcesso from '../components/CriarProcesso'
import ListaProcessos from '../components/ListaProcessos'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Lista de Processos</h2>
      </div>
      <CriarProcesso />
      <ListaProcessos />
    </main>
  )
}

export default Home
