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
import Client from '../Components/Client'

export default function Home() {
  return (
    <div className={styles.container}>
 <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />

      
      <Script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </Script>
    </Head>
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
      <Blog></Blog>
      <Client/>
    </div>
  )
}
