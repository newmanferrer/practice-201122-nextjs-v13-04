import { ShoppingCartProvider } from '../contexts'
import { Navigation, ShoppingCart } from '../components'
import './globals.css'
import { font_montserrat, font_rubik_distressed, font_roboto, font_dancing_script } from '../fonts'

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <ShoppingCartProvider>
      <html
        lang='en'
        className={`${font_montserrat.variable} ${font_rubik_distressed.variable} ${font_roboto.variable} ${font_dancing_script.variable}`}
      >
        <head />
        <body>
          <header>
            <Navigation />
          </header>

          <main>
            {children}
            <ShoppingCart />
          </main>
        </body>
      </html>
    </ShoppingCartProvider>
  )
}
