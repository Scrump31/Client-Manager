/* eslint-disable no-unused-vars */
import React from 'react'
import App from 'next/app'
import ReactNotification from 'react-notifications-component'
import Layout from '../components/Layout'
import '../css/tailwind.css'
import 'react-notifications-component/dist/theme.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <ReactNotification />
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
