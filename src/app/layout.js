import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from '@/context'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shiva Jewellers',
  description: 'A website that shows all the availaible products and their Description in Shiva Jewellers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main>
            {children} </main>
        </GlobalState></body>
    </html>
  )
}
