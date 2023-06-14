/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import './comunidad.css'
import { BiSearch, BiEdit } from "react-icons/bi";
import { GoZap } from "react-icons/go";

export default function Comunidad() {
  return (
    <main className="main shadow d-flex justify-content-center align-items-center">

      <div className="comunidad-container py-5 px-2 px-sm-5 bg-dark rounded-2 mx-2 my-5">
        <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center gap-4">
          <div
            className="d-flex gap-3 gap-md-5 justify-content-between justify-content-xl-start w-100 flex-column flex-md-row">
            <div>
              <h1 className="text-uppercase text-light text-center text-md-start">comunidad</h1>
            </div>
            <form className="d-flex align-items-center justify-content-md-start justify-content-center">
              <input type="text" className="form-control rounded-0" style={{width: 280, maxWidth: 280}} />
                <div className="d-flex justify-content-center align-items-center bg-light p-1 px-2 m-0 btn-search"
                  style={{minHeight: 38}}>
                  <BiSearch size={20} />
                </div>
            </form>
          </div>
          <div className="d-flex gap-3 flex-column flex-sm-row w-100">
            <button type="button" className="w-100 button d-flex align-items-center justify-content-center px-3 gap-2">
              <GoZap className='fs-4'/>
              <h4 className="m-0 fs-5">Nuevos mensajes</h4>
            </button>
            <button type="button" className="w-100 button d-flex align-items-center justify-content-center px-3 gap-2">
              <BiEdit className='fs-4' />
              <h4 className="m-0 fs-5">Publicar tema</h4>
            </button>
          </div>
        </div>
        <div className="mt-4 d-flex w-100 gap-2 flex-column flex-md-row">
          <div className="bg-light w-auto" style={{ minWidth: '60%' }}>
            <ul className="list-group rounded-0">
              <li className="list-group-item bg-black text-light fs-4">Conocimiento</li>

              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <img src="/img/comunidad/conocimiento/LogoActivo.png" className="img-conocimiento__icon" />
                  <div>
                    <a href="#" className="tema-title fs-4 conocimiento-title">Ciencia</a>
                    <ul className="conocimento-list d-flex gap-5">
                      <li className="conocimento-list__item"><span className="text-secondary">Temas:</span> 2</li>
                      <li className="conocimento-list__item"><span className="text-secondary">Mensajes:</span> 6</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <img src="/img/comunidad/conocimiento/LogoInactivo.png" className="img-conocimiento__icon" />
                  <div>
                    <a href="#" className="tema-title fs-4 conocimiento-title">Geografía</a>
                    <ul className="conocimento-list d-flex gap-5">
                      <li className="conocimento-list__item"><span className="text-secondary">Temas:</span> 1</li>
                      <li className="conocimento-list__item"><span className="text-secondary">Mensajes:</span> 3</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <img src="/img/comunidad/conocimiento/LogoInactivo.png" className="img-conocimiento__icon" />
                  <div>
                    <a href="#" className="tema-title fs-4 conocimiento-title">Historia</a>
                    <ul className="conocimento-list d-flex gap-5">
                      <li className="conocimento-list__item"><span className="text-secondary">Temas:</span> 2</li>
                      <li className="conocimento-list__item"><span className="text-secondary">Mensajes:</span> 2</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <img src="/img/comunidad/conocimiento/LogoInactivo.png" className="img-conocimiento__icon" />
                  <div>
                    <a href="#" className="tema-title fs-4 conocimiento-title">Mitos y leyendas</a>
                    <ul className="conocimento-list d-flex gap-5">
                      <li className="conocimento-list__item"><span className="text-secondary">Temas:</span> 1</li>
                      <li className="conocimento-list__item"><span className="text-secondary">Mensajes:</span> 1</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-light w-auto" style={{ minWidth: '40%' }}>
            <ul className="list-group rounded-0">
              <li className="list-group-item bg-black text-light fs-4 mb-3">Temas destacados</li>
              <li className="list-group-item">
                <div className="d-flex gap-3">
                  <img src="/img/comunidad/temasDestacados/userOne.jpeg" className="img-fluid shadow profile-img" />
                  <div>
                    <a href="#" className="fs-4 tema-title">La historia de Bolivar en el Perú</a>
                    <ul className="tema-list">
                      <li className="tema-list__item">Iniciado por Force</li>
                      <li>El Jueves a las 5:12 PM</li>
                      <li>Repuestas: 4</li>
                      <li>Historia</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex gap-3">
                  <img src="/img/comunidad/temasDestacados/userTwo.jpeg" className="img-fluid shadow profile-img" />
                  <div>
                    <a href="#" className="fs-4 tema-title">Manco Cápac y Mama Ocllo</a>
                    <ul className="tema-list">
                      <li className="tema-list__item">Iniciado por Force</li>
                      <li>El Jueves a las 1:12 PM</li>
                      <li>Repuestas: 2</li>
                      <li>Mitos y leyendas</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <ul className="list-group rounded-0">
            <li className="list-group-item bg-black text-light fs-4">Videojuegos</li>
            <li className="list-group-item">
              <div className="d-flex align-items-center">
                <img src="/img/comunidad/conocimiento/LogoInactivo.png" className="img-conocimiento__icon" />
                  <div>
                    <a href="#" className="tema-title fs-4 conocimiento-title">Videojuegos Puk-Yati</a>
                    <ul className="conocimento-list d-flex gap-5">
                      <li className="conocimento-list__item"><span className="text-secondary">Temas:</span> 2</li>
                      <li className="conocimento-list__item"><span className="text-secondary">Mensajes:</span> 6</li>
                    </ul>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
};
