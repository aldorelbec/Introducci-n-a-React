

import { useState } from 'react';
import Juego from './Juego';
import Mensaje from './Mensaje';
import './App.css'; 

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio());
  const [intento, setIntento] = useState('');
  const [mensaje, setMensaje] = useState('¡Adivina el número entre 1 y 100!');
  const [juegoGanado, setJuegoGanado] = useState(false);

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setIntento('');
    setMensaje('¡Adivina el número entre 1 y 100!');
    setJuegoGanado(false);
  };

  const manejarIntento = (e) => {
    e.preventDefault();
    const numero = parseInt(intento, 10);

    if (isNaN(numero) || numero < 1 || numero > 100) {
      setMensaje('Por favor, ingresa un número válido entre 1 y 100.');
      return;
    }

    if (numero === numeroSecreto) {
      setMensaje('¡Felicidades! ¡Adivinaste el número!');
      setJuegoGanado(true);
    } else if (numero > numeroSecreto) {
      setMensaje('Demasiado alto. Intenta un número más bajo.');
    } else {
      setMensaje('Demasiado bajo. Intenta un número más alto.');
    }

    setIntento('');
  };

  return (
    <div className="contenedor-principal">
      <h1>Adivina el Número</h1>

      {juegoGanado ? (
        <div className="juego-ganado-container">
          <Mensaje mensaje={mensaje} />
          <button onClick={reiniciarJuego}>Jugar de Nuevo</button>
        </div>
      ) : (
        <Juego
          intento={intento}
          setIntento={setIntento}
          manejarIntento={manejarIntento}
          mensaje={mensaje}
        />
      )}
    </div>
  );
}

export default App;