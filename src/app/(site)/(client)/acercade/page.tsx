/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect } from 'react'
import './acercade.css'
import { GrGamepad } from "react-icons/gr";

export default function Acercade() {



  useEffect(() => {
    const parallax: any = document.querySelector('.parallax')
    const scroll = () => {
      let scrollTop = document.documentElement.scrollTop
      if (parallax) parallax.style.backgroundPosition = '0 ' + (scrollTop * -0.19) + 'px';
    }
    window.addEventListener('scroll', scroll)
  }, [])

  return (
    <main className="main shadow d-flex flex-column justify-content-center align-items-center px-3 py-5 py-md-0">
      <div className="w-100 bg-black d-flex justify-content-center align-items-center"
        style={{ maxWidth: 1250, height: '86vh', boxShadow: '0 0 50px 50px #000', zIndex: 2 }}>
        <div className="bg-dark w-100 rounded-3 text-light d-flex p-3 p-md-5 flex-column flex-md-row align-items-center"
          style={{ maxWidth: 1100 }}>
          <div className="d-flex flex-column gap-4 my-4" style={{ width: '100%', maxWidth: 550 }}>
            <div className="d-flex justify-content-center justify-content-md-start">
              <img src="/img/acercade/logo.png" className="img-fluid"
                style={{ width: 220, height: 120, objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div>
              <p className="m-0 text-center text-md-start">La plataforma digital educativo y didáctica más variada en el Perú.
                Una comunidad sobre el
                conocimiento.</p>
            </div>
            <div className="d-flex gap-5 justify-content-center justify-content-md-start">
              <div className="d-flex flex-column gap-1">
                <div className="estado">
                  <span style={{ backgroundColor: 'yellow' }}></span>
                  <h4 className="m-0 fs-6">EN LINEA</h4>
                </div>
                <div>
                  <h4>671,249</h4>
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <div className="estado">
                  <span style={{ backgroundColor: '#C44090' }}></span>
                  <h4 className="m-0 fs-6">JUGANDO</h4>
                </div>
                <div>
                  <h4>123,456</h4>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center">
              <a href="./Registro.html"><button className="button fs-5 text-uppercase" style={{ width: 300 }}>registrarse en
                puk-yati</button></a>
            </div>
          </div>
          <div className="d-flex align-items-center" style={{ width: '100%', maxWidth: 550 }}>
            <img src="/img/acercade/Pc.png" className="img-fluid"
              style={{ width: 502, height: 300, objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center"
        style={{ maxWidth: 1250, height: '60vh', overflow: 'hidden' }}>
        <div className="parallax w-100 d-flex justify-content-center align-items-center">
          <div className="biblioblock d-flex flex-column justify-content-center gap-4 py-5 px-2 p-md-5 rounded-2"
            style={{ maxWidth: 800 }}>
            <p className="m-0 text-center fs-3 text-light">Tenemos una gran variedad de videojuegos que ofrecen un verdadero
              complemento a la educación didáctica.</p>
            <div className="d-flex justify-content-center align-items-center">
              <a href="./biblioteca.html" style={{ zIndex: 2 }}><button className="button fs-4 text-uppercase">Biblioteca</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 bg-black d-flex justify-content-center align-items-center content-parallax"
        style={{ maxWidth: 1250, height: '85vh', boxShadow: '0 0 50px 50px #000', zIndex: 2 }}>
        <div
          className="bg-dark d-flex gap-3 text-light py-5 px-2 p-md-5 rounded-2 w-100 align-items-center flex-column flex-md-row"
          style={{ maxWidth: 900 }}>
          <div className="d-flex flex-column gap-5 align-items-center w-100">
            <p className="m-0 text-center text-md-start fs-5">¡Comparte tu conocimiento, únete a grupos, desarrolla videojuegos,
              chatea mientras juegas y mucho más!</p>
            <a href="/comunidad"><button className="text-uppercase button">comunidad</button></a>
          </div>
          <div>
            <img src="/img/acercade/manypeople.png" className="img-fluid" style={{ maxWidth: 300, maxHeight: 250, objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
      <div className='z-3 mb-5 bg-dark table-responsive table-container'>
        <table className='table table-dark table-striped text-center table-condensed'>
          <thead className='py-4'>
            <tr>
              <th className='text-center'>
                <div className='d-flex flex-column gap-2 bg-dark text-white text-center align-items-center'>
                  <GrGamepad className='func_icon' size={50} />
                  <span className='text-white bg-transparent'>
                    Funcionalidad / Característica
                  </span>
                </div>
              </th>
              <th className='py-4'>
                <div className='d-flex flex-column gap-2 bg-dark text-center align-items-center'>
                  <img src="/img/logosmarcas/Steam_Logo.png" className='bg-transparent icon' alt="steam_logo" />
                  <a className='text-white text-decoration-none bg-transparent' href="https://store.steampowered.com/?l=spanish">
                    Steam
                  </a>
                </div>
              </th>
              <th className='py-4'>
                <div className='d-flex flex-column gap-2 bg-dark text-center align-items-center'>
                  <img src="/img/logosmarcas/Epic_Games_logo.png" className='bg-transparent icon' alt="steam_logo" />
                  <a className='text-decoration-none bg-transparent text-white' href="https://www.epicgames.com/site/es-ES/home">Epic Games
                  </a>
                </div>
              </th>
              <th className='py-4 text-center bg-dark'>
                <div className='d-flex flex-column gap-2 bg-dark text-center align-items-center'>
                  <img src="/img/logosmarcas/itchio_logo.jpg" className='bg-transparent iconv2' alt="steam_logo" />
                  <a className='text-decoration-none bg-transparent text-white' href="https://itch.io/">
                    Itch.io
                  </a>
                </div>
              </th>
              <th className='py-4 text-center bg-dark'>
                <div className='d-flex flex-column gap-2 bg-dark text-center align-items-center'>
                  <img src="/img/logosmarcas/pukyati_logo.jpg" className='bg-transparent iconv2' alt="steam_logo" />
                  <a className='text-decoration-none bg-transparent text-white' href="/">
                    Puk Yati
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            <tr>
              <td>Precios</td>
              <td>Variedad de Precios</td>
              <td>Variedad de Precios</td>
              <td>Precios bajos, eleccion y adquisicion recursos para diseño gamer</td>
              <td>Unico pago por la membresia y compra por material extra</td>
            </tr>
            <tr>
              <td>Seguridad y proteccion al usuario</td>
              <td>Ofrece un sistema de escaneo anti-hack y de reporte de usuarios</td>
              <td>Ofrece un sistema de escaneo anti-hack y de reporte de usuarios</td>
              <td>Seguridad al momento de la compra de juegos</td>
              <td>Sistemas anti-hack, reporte y seguridad al momento de la compra</td>
            </tr>
            <tr>
              <td>Foros y Comunidad</td>
              <td>Distintos idiomas</td>
              <td>Solo ingles</td>
              <td>Solo ingles</td>
              <td>Español Latino</td>
            </tr>
            <tr>
              <td>Soporte Tecnico</td>
              <td>Ponerse en contacto con la compañia</td>
              <td>Ponerse en contacto con la compañia</td>
              <td>Depende de la compañia creadora del videojuego indie</td>
              <td>Sistema de contacto inmediato con la empresa creadora del videojuego</td>
            </tr>
            <tr>
              <td>Valor Educacional</td>
              <td>Educacional Games for Kids - Paquete de 21 juegos para niños</td>
              <td>Generalmente entretenimiento</td>
              <td>Posee juegos con tematicas sobre etica y valores</td>
              <td>Revalorizacion cultural Peruana, tematica de conocimiento y valores sociales</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}