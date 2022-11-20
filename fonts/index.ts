import { Montserrat, Roboto, Dancing_Script, Rubik_Distressed } from '@next/font/google'

//* Global Font
export const font_montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat'
})

//* Title
export const font_rubik_distressed = Rubik_Distressed({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubik-distressed'
})

//* Paragraph No.1
export const font_dancing_script = Dancing_Script({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script'
})

//* Paragraph No.2
export const font_roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto'
})
