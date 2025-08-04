import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/img/Error-404-Page-Not-Found.png';

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-200 text-center">
      <h1 className="mb-4">Página No Encontrada</h1>
      <img 
        src={errorImage} 
        alt="imagen error de página" 
        className="img-fluid mb-4" 
        style={{ maxWidth: '400px' }} 
      />
      <Link to="/" className="btn btn-primary">Ir a Página Principal</Link>
    </div>
  );
}

export default NotFound;