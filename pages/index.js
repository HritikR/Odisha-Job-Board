import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Odisha Job Board</title>
        <meta name="description" content="Odisha District Job Portal By Hritik R" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Footer/>
    </>
  )
}
