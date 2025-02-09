import { Link, useNavigate } from "react-router-dom";
import logotipo from "../assets/Logotipo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary mb-4"
      data-bs-theme="dark"
    >
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="btn btn-outline-secondary" to="/">
                Inicio
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {token ? (
              <>
                      
            <li className="nav-item">
              <Link className="btn btn-outline-secondary me-2" to="/mis-productos">
                Mis productos
              </Link>
            </li>
 

                <li className="nav-item">
                  <Link
                    className="btn btn-outline-secondary me-2"
                    to="/nuevo-producto"
                  >
                    Agregar producto
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
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
                  <Link className="btn btn-outline-secondary" to="/register">
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
