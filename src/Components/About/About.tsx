import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Vision from './Vision'

const Homescreen = () => {
  return (
    <div>
        <Header />
        <Body />
      <Hero />
      <br />
      <br />
      <Vision />
        <Footer />
    </div>
  )
}

export default Homescreen