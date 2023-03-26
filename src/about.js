import React, { useEffect } from 'react'
import './about.css'
import Clients from './components/clients'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import Banner from './components/banner'
import Ul from './components/ul'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Aboutus() {

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

      <div className='aboutcont' >
        <div className='first x8'>
          <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn" duration={ 1.5 }>

            <h1>About AlMasa</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis finibus laoreet mollis. Maecenas lacinia, tellus
              vitae ullamcorper tincidunt, quam diam volutpat tort
              or, vel pharetra diam lacus eget mi. Quisque sit amet
              arcu eu elit euismod consectetur. Donec vulputate, eros
              nec maximus imperdiet, nunc urna porta est, consectetur
              consequat felis nibh eget leo. Duis congue libero et
              tincidunt aliquam. Aliquam pretium malesuada rutrum.
              Duis pharetra orci at magna luctus, vel luctus justo
              elementum. Donec sodales augue at sapien iaculis finibus.

            </p>
          </AnimationOnScroll>
        </div>

        <div className='snd'>
          <ul>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 300 } >
              <li>Provide the foundations for major companies and projects.</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 400 } >
              <li>Draw up long-term strategic plans.</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 500 } >
              <li>identify an approach and an integrated system by our experts
                to ensure the ability to compete.</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
              <li>Carry out all government interactions and handle the necessary paperwork.</li>
            </AnimationOnScroll>
          </ul>
          <img src='col2.jpeg' alt='Container Collection' />
        </div>

        <div className='first'>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis finibus laoreet mollis. Maecenas lacinia, tellus
            vitae ullamcorper tincidunt, quam diam volutpat tort
            or, vel pharetra diam lacus eget mi. Quisque sit amet
            arcu eu elit euismod consectetur. Donec vulputate, eros
            nec maximus imperdiet, nunc urna porta est, consectetur
            consequat felis nibh eget leo. Duis congue libero et
            tincidunt aliquam. Aliquam pretium malesuada rutrum.
            Duis pharetra orci at magna luctus, vel luctus justo
            elementum. Donec sodales augue at sapien iaculis finibus.
          </p>
          <hr style={ { width: '80%' } } />
        </div>

        <div className='thrd' >
          <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown" delay={ 300 } >
            <h1>Our Core Values</h1>
            <div className='subthrd' >
              <div>
                <p>&#9733; Committed to delivering the best.</p>
                <p>&#9733; We care for your Quality And Health.</p>
              </div></div>
            <div className='subthrd' >
              <div>
                <p>&#9733; Honest and transparent services. </p>
                <p>&#9733; Keep learning and adapting to new technologies. </p>
              </div></div>
          </AnimationOnScroll>
        </div>

      </div>
      <Prefooter />
      <Footer />

    </>
  )
}
