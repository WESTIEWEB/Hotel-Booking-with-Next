import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'], style: ['italic', 'normal'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Hotel Management System',
  description: 'Book a room in our hotel today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <main className='font-normal'>
          {/* ?Header  */}
          {children}
          {/* ?Footer  */}
        </main>
      </body>
    </html>
  )
}
