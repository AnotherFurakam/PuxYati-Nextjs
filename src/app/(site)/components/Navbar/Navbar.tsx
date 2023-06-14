'use client'
import type { FC } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle'
import './navbar.css'

interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-dark navbar-expand-md nav flex-column">
        <div className="d-flex justify-content-end w-100">
          <ul className="navbar-nav auth-nav flex-row me-3 me-lg-0">
            <li className="nav-item">
              <a className="nav-link auth-link" href="/login">Iniciar sesión</a>
            </li>
            <li className="bg-light mx-1 separador">
            </li>
            <li className="nav-item">
              <a className="nav-link auth-link" href="/Registro">Registrarse</a>
            </li>
          </ul>
        </div>
        <div className="container-fluid mx-lg-4">
          <a href="/" className="nav__logo"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
              <li className="nav-item">
                <a className="nav-link" href="/biblioteca">BIBLIOTECA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/comunidad">COMUNIDAD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/acercade">ACERCA DE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/soporte">SOPORTE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;