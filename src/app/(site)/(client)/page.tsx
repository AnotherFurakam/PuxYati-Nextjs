/* eslint-disable @next/next/no-img-element */
import './index.css'
import { BiSearch } from "react-icons/bi";

export default function Home() {
  return (
    <main className="main">
      <section className="destacados py-4 px-2" id="destacados">
        <div className="carousel__container mx-auto">
          <div className="d-flex flex-column flex-md-row justify-content-md-between w-100 py-3">
            <h1 className="fs-4 fw-light m-0 text-light text-center text-md-start text-uppercase pt-1">Lo mas destacado y
              recomendado</h1>
            <div className="input-group ms-auto mt-4 mt-md-0 mx-auto mx-md-0" style={{ maxWidth: 250 }}>
              <input type="text" className="form-control" placeholder="Buscar" />
              <button type="button" className="btn btn-light text-light pt-2 d-flex justify-content-center" style={{ backgroundColor: '#171A21' }}>
                <BiSearch size={20} />
              </button>
            </div>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner absolute">
              <div className="carousel-item active">
                <img src="/img/index/destacados/1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/index/destacados/2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/index/destacados/3.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="prueba-cat row mx-0 my-4">
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
          <h1 className="prub-title text-uppercase fs-4">prueba también</h1>
          <div className="cards">
            <div className="card-custom">
              <a href="#">
                <h1 className="fs-4 fw-light text-center">El descubrimiento de Machu Picchu</h1>
              </a>
              <img src="/img/index/prueba_tambien/1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom">
              <a href="#">
                <h1 className="fs-4 fw-light text-center">Chasqui</h1>
              </a>
              <img src="/img/index/prueba_tambien/2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom">
              <a href="#">
                <h1 className="fs-4 fw-light text-center">Lineas de Nazca: Un viaje al pasado</h1>
              </a>
              <img src="/img/index/prueba_tambien/3.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom">
              <a href="#">
                <h1 className="fs-4 fw-light text-center">1814: La rebelión del Cusco</h1>
              </a>
              <img src="/img/index/prueba_tambien/4.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom">
              <a href="#">
                <h1 className="fs-4 fw-light text-center">El camino a la independencia del Perú: Simón Bolívar</h1>
              </a>
              <img src="/img/index/prueba_tambien/5.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-custom">
              <a href="#">
                <h1 className="fs-4 fw-light text-center">Atrapados en Chavín de Huántar</h1>
              </a>
              <img src="/img/index/prueba_tambien/6.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
