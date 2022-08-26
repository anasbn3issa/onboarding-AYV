import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import FullScreenNavBar from '../components/FullScreenNavBar';

const Home: NextPage = () => {



  return (
    <div>
      <Head>
        <title>AYV Onboarding project</title>
        <meta name="description" content="AYV Onboarding project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullScreenNavBar />

      <h1 className="text-6xl text-center mt-32 font-bold">
        Welcome to AYV Onboarding project
      </h1>
      <h3 className="text-3xl text-right mt-3 mr-3">Created by <span className="text-purple-600">Anas BEN AISSA</span></h3>
    
    </div>
  )
}

export default Home
