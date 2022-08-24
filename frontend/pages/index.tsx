import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from "next/router";
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  React.useEffect(() => {
    Router.push("/dashboard");
  });
  return <div />;
}

export default Home
