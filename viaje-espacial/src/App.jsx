// src/App.jsx

import { useState, useEffect, useMemo } from 'react';
import './App.css'; // Asegúrate de crear este archivo

// Definimos la lista de planetas para nuestro viaje
const planetas = [
  'Tierra',
  'Luna',
  'Marte',
  'Júpiter',
  'Saturno',
  'Urano',
  'Neptuno'
];

function App() {
  // Estado para la información de la nave
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [naveActiva, setNaveActiva] = useState(false);

  // --- useEffect para el ciclo de vida: Montaje y Desmontaje ---
  useEffect(() => {
    console.log('Componente montado: ¡La nave está lista para el despegue!');
    
    // Esta función de limpieza se ejecuta al desmontar el componente o antes de una nueva renderización
    return () => {
      console.log('Componente desmontado: La nave ha regresado a la base.');
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar

  // --- useEffect para los Efectos Secundarios: El Vuelo ---
  useEffect(() => {
    let intervaloVuelo;
    if (naveActiva && combustible > 0) {
      console.log('useEffect: El vuelo ha comenzado...');
      
      // Simula el vuelo cada segundo
      intervaloVuelo = setInterval(() => {
        setDistancia(prevDistancia => prevDistancia + 1);
        setCombustible(prevCombustible => prevCombustible - 1);
      }, 1000);
    } else {
      // Si la nave no está activa o se queda sin combustible, detiene el intervalo
      clearInterval(intervaloVuelo);
      console.log('useEffect: Vuelo detenido.');
    }

    // Limpieza: importante para evitar que el intervalo siga corriendo
    return () => clearInterval(intervaloVuelo);
  }, [naveActiva, combustible]); // Dependencias: se ejecuta cada vez que naveActiva o combustible cambian

  // --- useEffect para detectar la llegada a un planeta ---
  useEffect(() => {
    // Si la distancia es un múltiplo de 10, simulamos que llegamos a un planeta
    if (distancia > 0 && distancia % 10 === 0) {
      const nuevoPlaneta = planetas[(distancia / 10) - 1];
      if (nuevoPlaneta) {
        setPlanetasVisitados(prevPlanetas => [...prevPlanetas, nuevoPlaneta]);
        console.log(`¡Has llegado a ${nuevoPlaneta}!`);
      }
    }
  }, [distancia]); // Se ejecuta cada vez que la distancia cambia

  // --- useMemo para optimizar cálculos ---
  // Calcula el estado actual de la nave (con o sin combustible)
  const estadoDeNave = useMemo(() => {
    console.log('useMemo: Recalculando el estado de la nave...');
    if (combustible > 0) {
      return 'En Vuelo';
    } else if (distancia > 0) {
      return 'Sin combustible';
    }
    return 'En la plataforma';
  }, [combustible, distancia]); // Se recalcula solo si el combustible o la distancia cambian

  const toggleNave = () => {
    setNaveActiva(!naveActiva);
  };

  return (
    <div className="panel-de-control">
      <h1>Panel de Control de la Nave Espacial</h1>
      
      <div className="info-nave">
        <p>Distancia Recorrida: <strong>{distancia}</strong> años luz</p>
        <p>Combustible: <strong>{combustible}%</strong></p>
        <p>Estado de la Nave: <strong>{estadoDeNave}</strong></p>
      </div>

      <button onClick={toggleNave} disabled={combustible <= 0}>
        {naveActiva ? 'Detener Vuelo' : 'Iniciar Vuelo'}
      </button>

      <div className="planetas-visitados">
        <h2>Planetas Visitados</h2>
        <ul>
          {planetasVisitados.map((planeta, index) => (
            <li key={index}>{planeta}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;