import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata = {
  title: 'NFT Preview Card Component',
  description: 'A design challenge for newbie in ReactJS'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
