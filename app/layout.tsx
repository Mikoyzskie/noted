import './globals.scss'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Sidebar from './components/Sidebar'
import StickyWall from './components/StickyWall'

const inter = Quicksand({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Noted Po! | Jot Smarter, Not Harder!',
  description: "Use this you forgetful son of a bitch. Also it's colorful.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar></Sidebar>
        <StickyWall></StickyWall>
      </body>
    </html>
  )
}
