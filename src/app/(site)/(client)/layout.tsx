import { Metadata } from 'next'
import '../../globals.css'
import Navbar from '../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/Footer'

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
      <body>
        <Navbar />
        {
          children
        }
        <Footer />
      </body>
    </html>
  )
}
