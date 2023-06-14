import type { FC } from 'react';
import './login.css'

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  return (
    <main className="main shadow d-flex justify-content-center align-items-center">
      <div className="login-container py-5">
        <h1 className="text-uppercase text-light fs-2 fw-light mb-4 text-center text-sm-start">iniciar sesion</h1>
        <div className="bg-dark shadow rounded-1">
          <form action="" className="p-4 d-flex flex-column gap-3 align-items-center">
            <div className="w-100 px-sm-4 pt-3">
              <label className="form-label text-uppercase label-username">nombre de usuario</label>
              <input type="text" className="form-control" />
            </div>
            <div className="w-100 px-sm-4">
              <label className="form-label text-uppercase text-light">contraseña</label>
              <input type="password" className="form-control" />
            </div>
            <button className="d-flex justify-content-center mt-3 mb-4 mb-md-0 button-login fs-4 fw-light text-uppercase">
              Ingresar
            </button>
            <div className="w-100 d-flex justify-content-center pb-2">
              <a href="/" className="forget-link text-secondary">No recuerdo mi contraseña</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
export default page;