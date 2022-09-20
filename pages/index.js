import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import IndexHome from '../Components/IndexHome'
import MainHome from '../Components/MainHome'
import Collection from '../Components/Collection'
import PopularPackages from '../Components/PopularPackages'
import Feature from '../Components/Feature'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <MainHome/>
      <IndexHome />
      <PopularPackages />
      <Collection />
      <Feature />
    </div>
  )
}
