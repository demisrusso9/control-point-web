import React from 'react'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
)

export default MyApp
