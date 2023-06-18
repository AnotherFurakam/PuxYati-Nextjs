"use client"
import { useSession } from 'next-auth/react'
/* eslint-disable @next/next/no-img-element */
import './biblioteca.css'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
export default function Biblioteca() {
  const session = useSession()

  const { push } = useRouter()

  const handleClick = () => {
    if (session.status === 'authenticated') {
      Swal.fire({
        icon: 'success',
        text: 'Acceso al juego permitido'
      })
    } else {
      push('login', { shallow: true })
    }
  }
  return (
    <main className="main">
      <section className="prueba-cat row mx-0 mb-4 mt-5">
        <div className="row mb-4">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <h1 className="text-uppercase text-light fw-light fs-2">biblioteca</h1>
          </div>
        </div>
        <div className="categorias col-md-2">
          <h1 className="cat-title text-uppercase fs-4">categorias</h1>
          <div className="cat-list navbar-dark">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
              <li className="nav-item">
                <a className="nav-link" href="#">Ciencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Geografía</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Historia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mitos y leyendas</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="prueba col-md-10">
          <h1 className="text-uppercase fs-4 text-light mb-4">jugados recientemente</h1>
          <div className="cards">
            <div className="card-custom" onClick={handleClick}>
              <a href="#">
                <h1 className="fs-4 fw-light text-center">El descubrimiento de Machu Picchu</h1>
              </a>
              <img src="/img/biblioteca/1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom" onClick={handleClick}>
              <a href="#">
                <h1 className="fs-4 fw-light text-center">Chasqui</h1>
              </a>
              <img src="/img/biblioteca/2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom" onClick={handleClick}>
              <a href="#">
                <h1 className="fs-4 fw-light text-center">Lineas de Nazca: Un viaje al pasado</h1>
              </a>
              <img src="/img/biblioteca/3.jpg" className="img-fluid" alt="" />
            </div>
            <div className="proximamente">
              <a>
                <h1 className="fs-4 fw-light">PROXIMAMENTE</h1>
              </a>
            </div>
            <div className="proximamente">
              <a>
                <h1 className="fs-4 fw-light">PROXIMAMENTE</h1>
              </a>
            </div>
            <div className="proximamente">
              <a>
                <h1 className="fs-4 fw-light">PROXIMAMENTE</h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}