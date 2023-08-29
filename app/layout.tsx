"use client"

import './globals.scss'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Sidebar from './components/Sidebar'
import StickyWall from './components/StickyWall'
import { ThemeProvider } from 'next-themes'

const inter = Quicksand({ subsets: ['latin'], weight: ["400", "700"] })


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
