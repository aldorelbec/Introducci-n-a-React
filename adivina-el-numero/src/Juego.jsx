

import React from 'react';
import Mensaje from './Mensaje';

const Juego = ({ intento, setIntento, manejarIntento, mensaje }) => {
  return (
    <div className="juego-container">
      <form onSubmit={manejarIntento}>
        <input
          type="number"
          value={intento}
          onChange={(e) => setIntento(e.target.value)}
          placeholder="Ingresa un número"
          min="1"
          max="100"
          required
        />
        <button type="submit">Adivinar</button>
      </form>
      <Mensaje mensaje={mensaje} />
    </div>
  );
};

export default Juego;