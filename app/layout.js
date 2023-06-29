import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
const inter = Inter({ subsets: ['latin'] })

const fugazone = localFont({ 
  src: '../public/fonts/FugazOne-Regular.ttf',
  variable:'--font-fugaz-one'
})
const nunito = localFont({ 
  src: '../public/fonts/Nunito-VariableFont_wght.ttf',
  variable:'--font-nunito'
})
const oswald = localFont({ 
  src: '../public/fonts/Oswald-VariableFont_wght.ttf',
  variable:'--font-oswald'
})

export const metadata = {
  title: 'Rage Fitness home',
  description: 'Homepage of rage fitness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden bg-black ${inter.className} ${fugazone.variable} ${nunito.variable} ${oswald.variable}`}>{children}</body>
    </html>
  )
}
