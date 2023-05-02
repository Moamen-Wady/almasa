import './services.css'
import React, { useEffect } from 'react'
import Navbara from './components/navbara'
import Footera from './components/footera'
import Bannera from './components/bannera'
import Clients from './components/clients'
import Ula from './components/ula'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Productsa() {

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
      <Navbara />
      <Ula />
      <Bannera />
      <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown">
        <Clients />
      </AnimationOnScroll>

      <Footera />

    </>
  )
}
