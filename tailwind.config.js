/** @type {import('tailwindcss').Config} */
import { fontFamily, display, headings, body } from './src/styles/typographyStyles'

module.exports = {
  mode: 'jit',
  content: [
    './src/**/**/*.{js,jsx,ts,tsx,css,scss,mdx,md,pdf}',
    './public/**/*.html'
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      B: {
        25: '#EFF5FB',
        200: '#A0C4E9',
        400: '#4E91D5',
        500: '#205387',
        600: '#163A5F'
      },
      O: {
        25: '#FCE8D1',
        200: '#FFC78A',
        400: '#FF9624',
        500: '#EF7D00',
        600: '#D67000'
      },
      aqua: '#76C3C2',
      N: {
        25: '#F7F7F6',
        50: '#E4E4E3',
        100: '#D9D9D5',
        200: '#C0C0BF',
        300: '#A6A6A6',
        400: '#8D8D8D',
        500: '#747474',
        600: '#5A5A5A',
        700: '#3D3D3C',
        800: '#272724',
        900: '#101828'
      },
      G: {
        25: '#E8F4E4',
        100: 'D9D9D5',
        200: '#D2E8CA',
        400: '#84B870',
        500: '#6AAA53',
        600: '#4D7f3A'
      },
      R: {
        25: '#FFE2E7',
        200: '#FE8191',
        400: '#FA1E3A',
        500: '#E40521',
        600: '#B00018'
      },
      Y: {
        25: '#FFF9EB',
        200: '#FFDE8A',
        400: '#FFC124',
        500: '#F0AC00',
        600: '#D69A00'
      }
    },
    fontFamily: {
      ...fontFamily
    },
    fontSize: {
      ...headings.fontSize,
      ...display.fontSize,
      ...body.fontSize
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900'
    },
    extend: {
      lineHeight: {
        xxs: '16px',
        xs: '20px',
        md: '24px'
      }
    }
  },
  plugins: []
}
