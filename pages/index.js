import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/header'
import Tabs from '../components/tabs'
import Pages from '../components/pages'
import Footer from '../components/footer'

export default function Home() {
  const [currentTab, setCurrentTab] = useState(1); 
  return (
    <>
      <Head>
        <title>Odisha Job Board</title>
        <meta name="description" content="Odisha District Job Portal By Hritik R" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section className="flex flex-col antialiased bg-gray-100 text-gray-600 min-h-screen p-4 touch-auto dark:bg-gray-700">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <Pages currentTab={currentTab}/>
      </section>
      <Footer/>
    </>
  )
}
