import './services.css'
import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Banner from './components/banner'
import Clients from './components/clients'
import Ul from './components/ul'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Products() {

  function scrollToHash() {

    const id = window.location.hash.substr( 1 );

    if ( id ) {
      const anchor = document.getElementById( id );

      if ( anchor ) {
        anchor.scrollIntoView();
      }
    }
  }

  useEffect( () => scrollToHash(), [] )
  return (
    <>
      <Navbar />
      <Ul />
      <Banner />
      <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown">
        <Clients />
      </AnimationOnScroll>

      <Footer />

    </>
  )
}
