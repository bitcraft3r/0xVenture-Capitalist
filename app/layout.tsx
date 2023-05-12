import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'
import getCurrentUser from './actions/getCurrentUser'
import ToasterProvider from './providers/ToasterProvider'

export const metadata = {
  title: `0xVenture Capitalist - Play The World's Easiest Browser Game`,
  description: `0xVC is an idle clicker game, where players aim to become the wealthiest crypto tycoon in the world. Learn about investing in crypto, DeFi, and NFTs, while playing a fun game!`,
}

const font = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <main className="py-[6rem] px-[1rem] bg-[#706960] text-neutral-100 h-[100vh]">
          {children}
        </main>
      </body>
    </html>
  )
}
