

import { useState, useEffect, useMemo } from 'react';
import './App.css'; 

const tareasIniciales = [
  { id: 1, nombre: 'Aprender React', tiempo: 2 },
  { id: 2, nombre: 'Hacer ejercicios de JavaScript', tiempo: 3 },
  { id: 3, nombre: 'Preparar la cena', tiempo: 1 },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [hora, setHora] = useState(new Date());
  

  useEffect(() => {
    console.log('useEffect se ejecutó: Actualizando la hora...');
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    
    return () => {
      console.log('useEffect se limpió: Intervalo detenido.');
      clearInterval(timer);
    };
  }, []); 

  const tiempoTotal = useMemo(() => {
    console.log('useMemo se ejecutó: Recalculando el tiempo total...');
    return tareas.reduce((total, tarea) => total + tarea.tiempo, 0);
  }, [tareas]); 
  
  const agregarTarea = () => {
    const nuevaTarea = {
      id: Date.now(),
      nombre: 'Nueva tarea ' + Date.now(),
      tiempo: Math.floor(Math.random() * 5) + 1,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <div className="container">
      <h1>Contador de Tareas</h1>
      <p className="hora-actual">Hora actual: {hora.toLocaleTimeString()}</p>
      
      <div className="tareas-info">
        <p className="tiempo-total">
          Tiempo total de tareas: <strong>{tiempoTotal}</strong> horas
        </p>
        <button onClick={agregarTarea}>Agregar Tarea de Prueba</button>
      </div>

      <ul className="lista-de-tareas">
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.nombre} - {tarea.tiempo} horas
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;