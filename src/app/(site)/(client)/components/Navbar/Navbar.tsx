'use client'
import { FC, useEffect } from 'react';
import './navbar.css'
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {

  const { data } = useSession()

  const pathname = usePathname()

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle')
  }, [data])

  return (
    <header className="header">
      <nav className="navbar navbar-dark navbar-expand-md nav flex-column">
        <div className="d-flex justify-content-end w-100">
          {
            data?.user ?
              <div className="dropdown">
                <button className="btn bg-black py-2 px-4  dropdown-toggle text-white m-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {`${data.user.name} ${data.user.lastname}`}
                </button>
                <ul className="dropdown-menu">
                  <li className='dropdown-item' style={{cursor: 'pointer'}} onClick={() => signOut()}>Cerrar sesión</li>
                </ul>
              </div>
              : <ul className="navbar-nav auth-nav flex-row me-3 me-lg-0">
                <li className="nav-item">
                  <a className={`nav-link auth-link ${pathname === '/login' && 'active'}`} href="/login">Iniciar sesión</a>
                </li>
                <li className="bg-light mx-1 separador">
                </li>
                <li className="nav-item">
                  <a className={`nav-link auth-link ${pathname === '/registrarse' && 'active'}`} href="/registrarse">Registrarse</a>
                </li>
              </ul>
          }
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
                <a className={`nav-link ${pathname === '/biblioteca' && 'active'}`} href="/biblioteca">BIBLIOTECA</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/comunidad' && 'active'}`} href="/comunidad">COMUNIDAD</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/acercade' && 'active'}`} href="/acercade">ACERCA DE</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === '/soporte' && 'active'}`} href="/soporte">SOPORTE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;