import './globals.css'
import { font_montserrat, font_rubik_distressed, font_dancing_script } from '../fonts'

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html
      lang='en'
      className={`${font_montserrat.variable} ${font_rubik_distressed.variable} ${font_dancing_script.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
