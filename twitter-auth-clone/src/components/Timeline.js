import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Timeline de Twitter</h2>
      <p>Aquí verías los tweets de tus amigos.</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Timeline;