import React from 'react'
import './index.css'
import Formulario from '../../components/Formulario';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <>
      <Header titulo="Tu boleto seguro al lugar que quieras" />
      <Formulario />
      <Footer />
    </>
  )
}

export default Landing