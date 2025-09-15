import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
  const { id } = useParams();

  // Aquí podrías simular la carga de datos de un doctor específico
  const doctor = {
    '1': { name: 'Dr. Luis Pérez', specialty: 'Cardiología' },
    '2': { name: 'Dra. Ana López', specialty: 'Dermatología' },
    '3': { name: 'Dr. Carlos García', specialty: 'Pediatría' },
  };

  const selectedDoctor = doctor[id];

  return (
    <div>
      <h1>Detalles del Doctor</h1>
      {selectedDoctor ? (
        <>
          <h2>{selectedDoctor.name}</h2>
          <p>Especialidad: {selectedDoctor.specialty}</p>
          <p>ID del Doctor: {id}</p>
          <p>
            Aquí puedes agregar información detallada sobre el doctor y un formulario para agendar una cita.
          </p>
        </>
      ) : (
        <p>No se encontró el doctor con el ID: {id}</p>
      )}
    </div>
  );
};

export default DoctorDetail;