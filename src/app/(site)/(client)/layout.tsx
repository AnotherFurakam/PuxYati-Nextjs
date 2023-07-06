import { Metadata } from 'next'
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Provider from '../Provider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Puk Yati',
  description: 'Portal de videojuegos didácticos'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <Provider>
          <Navbar />
          {
            children
          }
          <Footer />
        </Provider>
      <div id="modal-root" />
      </body>
    </html>
  )
}
