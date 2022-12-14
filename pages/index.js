import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import MainHome from '../Components/MainHome'
import Search from '../Components/Search'
import Types from '../Components/Types'
import Destination from '../Components/Destination'
import Sticky from '../Components/Sticky'
import PopularPackages from '../Components/PopularPackages'
import BestPlans from '../Components/BestPlans'
import Ask from '../Components/Ask'
import Success from '../Components/Success'
import Blog from '../Components/Blog'
import Instagram from '../Components/Instagram'
import Client from '../Components/Client'
import Script from 'next/script'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Nepal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Script
        id="my_script"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        async
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
      <Script
        id="my_script"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        defer
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
      <Navbar></Navbar>
      <MainHome />
      <Search />
      <Types />
      <PopularPackages></PopularPackages>
      <Destination></Destination>
      <Sticky />
      <Ask />
      <BestPlans></BestPlans>
      <Success />
      <Testimonial />

      <Blog></Blog>
      <Client />
      <Instagram />

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
