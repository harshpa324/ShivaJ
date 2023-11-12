
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from '@/context'
import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '@/context/Authcontext'
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Shiva Jewellers',
  description: 'A website that shows all the availaible products and their Description in Shiva Jewellers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <GlobalState>
            <Navbar />
            <main>
              <NextTopLoader
              
              color="#c53030"
              />
              
              {children} </main>
              <Footer />
          </GlobalState>
        </AuthContextProvider>
      </body>
    </html>
  )
}
