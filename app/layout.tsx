import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'KOREVİZYON | Endüstriyel ve Ev Isıtma ve Tesisatçılık',
  description: 'Premium endüstriyel ısıtma, soğutma ve tesisatçılık çözümleri ticari ve endüstriyel tesisler için. Kombi kazanları, radyatör kurulumu ve mühendislik hizmetleri.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'tr-TR': 'https://example.com/tr',
      'en': 'https://example.com/en',
    },
  },
  openGraph: {
    title: 'Isıtma Sistemleri A.Ş.',
    description: 'Premium endüstriyel ısıtma, soğutma ve tesisatçılık çözümleri',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    title: 'Isıtma Sistemleri A.Ş.',
    description: 'Endüstriyel ısıtma ve tesisatçılık çözümleri',
  },
  keywords: ['endüstriyel ısıtma', 'kombi kazanları', 'radyatör montajı', 'tesisatçılık sistemleri', 'mühendislik hizmetleri', 'ısıtma sistemleri', 'boiler', 'radiator'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background  text-text antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
