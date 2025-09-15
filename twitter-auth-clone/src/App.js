import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './components/Login';
import Timeline from './components/Timeline';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
const Home = () => <h2>Página de Inicio</h2>;

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/timeline">Timeline</Link> |{' '}
        <Link to="/profile">Perfil</Link> |{' '}
        {isAuthenticated ? null : <Link to="/login">Login</Link>}
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/timeline"
          element={
            <PrivateRoute>
              <Timeline />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </Router>
);

export default App;