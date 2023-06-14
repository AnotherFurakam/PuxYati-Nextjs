/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import './registrarse.css'

export default function Registrarse() {
  return (
    <main className="main shadow d-flex justify-content-center align-items-center">
      <div className="registro-container py-5 px-3">
        <div className="bg-dark shadow rounded-1 px-0 p-md-5 ">
          <div className="row flex-column px-2 mx-0 px-md-5 mx-md-5">
            <div className="col-md d-flex justify-content-between flex-column-reverse flex-md-row">
              <div className="d-flex align-items-center justify-content-center mb-5 mb-md-0">
                <h1 className="fs-1 text-uppercase text-light text-center fw-light">Registrarse</h1>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src="/img/registro/Logo.png" className="img-fluid img-logo" />
              </div>
            </div>
            <div className="col-md d-flex flex-column">
              <form action="" className="d-flex flex-column gap-4 mx-3">
                <div className="w-100 px-sm-4 pt-3">
                  <label className="form-label text-uppercase label-username text-light">dirección de correo electrónico</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="w-100 px-sm-4">
                  <label className="form-label text-uppercase text-light">contraseña</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="w-100 px-sm-4">
                  <label className="form-label text-uppercase text-light">confirmar contraseña</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="w-100 px-sm-4 d-flex justify-content-center gap-1 mt-3">
                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" role="button" style={{ minWidth: 15 }} />
                  <label className="form-check-label text-light" role="button">
                    Acepto los términos y condiciones de <a href="" className="auth-link text-light">Acuerdo de suscriptor</a> y la <a href="" className="auth-link text-light">Política de privacidad de PukYati</a>.
                  </label>
                </div>
                <button type='submit' className="d-flex justify-content-center mx-auto mt-3 mb-4 mb-md-0 text-uppercase button fs-4 fw-light">
                  siguiente
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
