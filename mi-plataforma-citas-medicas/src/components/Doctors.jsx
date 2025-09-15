import React from 'react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  // Lista de doctores de ejemplo
  const doctors = [
    { id: 1, name: 'Dr. Luis Pérez', specialty: 'Cardiología' },
    { id: 2, name: 'Dra. Ana López', specialty: 'Dermatología' },
    { id: 3, name: 'Dr. Carlos García', specialty: 'Pediatría' },
  ];

  return (
    <div>
      <h1>Nuestros Doctores</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            <Link to={`/doctors/${doctor.id}`}>
              {doctor.name} - {doctor.specialty}
            </Link>
          </li>
        ))}
      </ul>
      <p>Haz clic en el nombre de un doctor para ver sus detalles.</p>
    </div>
  );
};

export default Doctors;