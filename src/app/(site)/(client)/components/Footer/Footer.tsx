import type { FC } from 'react';
import './footer.css'

import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className="d-flex flex-column align-items-center">
      <div className="row copy copy pt-4">
        <div className="logo-footer col-md-3 mx-auto mx-0 mb-3 mb-md-0"></div>
        <div className="col-md-9 mx-auto" style={{width: '90%'}}>
          <p className="text-light w-100 m-0 text-center text-md-start" style={{textAlign: 'justify'}}>
            Ⓒ 2023 Puk-Yati. Todos los derechos reservados. Todas las marcas registradas pretenecen a sus respectivos
            dueños en Perú.
            Todos los precios incluyen IGV.&nbsp;&nbsp;
            <a href="" className="footer-link text-secondary">Política de Privacidad</a> -
            <a href="" className="footer-link text-secondary">Informacion legal</a> -
            <a href="" className="footer-link text-secondary">Acuerdo de suscriptor a Puk-Yati</a> -
            <a href="" className="footer-link text-secondary">Reembolsos</a> -
            <a href="" className="footer-link text-secondary">Cookies</a>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-end copy">
        <div className="d-flex gap-4 mx-auto mx-md-0 my-md-0 py-3">
          <a href="" className="footer-link text-secondary" style={{fontSize: 30}}><BsFacebook /></a>
          <a href="" className="footer-link text-secondary" style={{fontSize: 30}}><BsInstagram /></a>
          <a href="" className="footer-link text-secondary" style={{fontSize: 30}}><BsWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;