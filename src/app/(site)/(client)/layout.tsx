import { Metadata } from 'next'
import '../globals.css'
import Navbar from '../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/Footer'
import Provider from '../Provider'

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
      </body>
    </html>
  )
}
