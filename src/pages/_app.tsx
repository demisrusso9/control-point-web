import React from 'react'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/styles.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
