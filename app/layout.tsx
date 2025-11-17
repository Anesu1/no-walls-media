import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const baloo = Baloo_2({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo'
})

export const metadata: Metadata = {
  title: 'No Walls Media - Creative Advertising Agency',
  description: 'We\'re like every other ad agency, except for the creativity, perfect delivery, good looking squad, warmth and welcome, great results, and team spirit.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} overflow-x-hidden font-baloo`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
