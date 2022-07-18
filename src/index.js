import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Formulario from './components/formulario';
import Header from './components/Header';

ReactDOM.render(
    <div className='contenedor'>
      <Header />
      <Formulario />
    </div>
  ,document.getElementById('root')
);