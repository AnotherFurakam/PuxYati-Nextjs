/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "./soporte.css";

export default function Soporte() {
  return (
    <main className="main shadow d-flex justify-content-center align-items-center py-5">

      <div className="bg-dark py-5 px-2 px-lg-5 m-2">
        <div className="d-flex flex-column flex-lg-row align-items-center gap-0 gap-lg-5 justify-content-center">
          <div className="me-lg-5 d-flex justify-content-center">
            <h1 className="text-uppercase fs-2 text-light mt-2">soporte técnico</h1>
          </div>
          <div className="ms-lg-5 d-flex justify-content-center">
            <img src="/img/soporte/Logo.png" className="img-fluid" style={{ maxWidth: 150 }} />
          </div>
        </div>
        <div className="py-4 px-2 px-lg-4 rounded-2 shadow" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <div className="pb-4">
            <p className="m-0 text-light fs-6 text-center">Inicia sesión en tu cuenta de Puk-Yati para revisar las compras, el
              estado de la cuenta y obtener ayuda personalizada.</p>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-around px-2 gap-4">
            <a href="./login.html" className="button ms-lg-5" style={{ minWidth: 300, maxWidth: 380 }}>Iniciar sesion en Puk-Yati</a>
            <a href="./contraseña_olvidada.html" className="button me-lg-5"
              style={{ minWidth: 300, maxWidth: 380, backgroundColor: 'rgb(134, 133, 133)' }}>Ayuda, no puedo iniciar
              sesión</a>
          </div>
        </div>
        <div className="mt-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="accordion accordion-flush bg-transparent" id="accordionFlushExample">
            <div className="accordion-item bg-transparent">
              <h2 className="accordion-header bg-transparent" id="flush-headingOne">
                <button className="accordion-button acor collapsed bg-transparent text-light" type="button"
                  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                  aria-controls="flush-collapseOne">
                  Tengo otro tipo de problema/reporte
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse bg-transparent text-light"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <form action="" className="p-4 d-flex flex-column gap-4">
                  <div>
                    <label className="form-label text-light text-uppercase fs-4">usuario</label>
                    <input type="text" className="form-control rounded-0 rounded-0 rounded-0" />
                  </div>
                  <div>
                    <label className="form-label text-light text-uppercase fs-4">comentario</label>
                    <textarea className="form-control rounded-0 rounded-0 rounded-0" name="" id="" cols={30}
                      rows={10}></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="button">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
