import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination' 
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
