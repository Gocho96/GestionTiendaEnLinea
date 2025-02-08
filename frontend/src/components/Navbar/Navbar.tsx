import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import logotipo from './assest/Logotipo.svg';

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-4" data-bs-theme="dark navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={logotipo} alt="Logo" style={{ height: "60px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
          {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-secondary" to="/nuevo-producto">
                    Agregar producto
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger ms-2"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-danger me-2" to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-secondary me-2" to="/register">
                    Registrarse
                  </Link>
                </li>
              </>
            )}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
