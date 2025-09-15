
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Doctors from './components/Doctors';
import DoctorDetail from './components/DoctorDetail';
import Appointments from './components/Appointments';
import NotFound from './components/NotFound';

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '1em',
  backgroundColor: '#f0f0f0',
  marginBottom: '2em',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#007BFF',
  fontWeight: 'bold',
};

const containerStyles = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  textAlign: 'center',
};

function App() {
  return (
    <Router>
      <div style={containerStyles}>
       
        <nav style={navStyles}>
          <Link to="/" style={linkStyles}>Inicio</Link>
          <Link to="/Doctors" style={linkStyles}>Doctores</Link>
          <Link to="/Appointments" style={linkStyles}>Citas</Link>
        </nav>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;