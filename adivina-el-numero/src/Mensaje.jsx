

import React from 'react';

const Mensaje = ({ mensaje }) => {

  const estilo = mensaje.includes('¡') ? 'mensaje-ganador' : '';

  return <p className={`mensaje ${estilo}`}>{mensaje}</p>;
};

export default Mensaje;