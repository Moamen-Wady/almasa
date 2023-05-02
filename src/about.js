import React, { useEffect } from 'react'
import './about.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
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

            <h1>About ALMASA</h1>
            <p>
              We are committed to offer a variety of plastic containers.
              Especially right now, we’re doing everything we can to
              provide the packaging needed for your product to hit the market.
              Our goal is to wow you, now and throughout the life of your business.
            </p>
          </AnimationOnScroll>
        </div>

        <div className='snd'>
          <ul>
            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 300 } >
              <li>- Quality Control System</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 400 } >
              <li>- Professional and Qualified</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 500 } >
              <li>- 100% Satisfaction Guarantee</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
              <li>- Environmentally Safe Raw Materials</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
              <li>- Highly Professional Staff</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
              <li>- Personalized solutions</li>
            </AnimationOnScroll>

          </ul>

          <img src='2.jpg' alt='future development' />
        </div>

        <div className='first'>

          <p>
            Therefore,  We understand completely your need.
            After all, we at Madapack have the same need.
            That is why we are manufacturing plastic containers for a healthy and better lifestyle
            that are of the highest quality and most advantageous design.
          </p>
          <hr style={ { width: '80%' } } />
        </div>

        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">

          <div className=' vismis '>
            <div className=' nos '>
              <img src='light.png' alt='' />
              <h1>Our Vision</h1>
              <p>To offer a variety of plastic containers.
                Especially right now, we’re doing everything
                we can to provide the packaging needed for your
                product to hit the market. Our goal is to wow you,
                now and throughout the life of your business.
              </p>
            </div>
            <div className=' nos '>
              <img src='target.png' alt='' />
              <h1>Our Mission</h1>
              <p>We are committed to offer a variety of plastic containers.
                Especially right now, we’re doing everything we can to provide
                the packaging needed for your product to hit the market.
                Our goal is to wow you, now and throughout the life of your business.
              </p>
            </div>
          </div>
        </AnimationOnScroll>


        <div className='thrd' >

          <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown" delay={ 300 } >
            <h1>Our Core Values</h1>
            <div className='subthrd' >
              <div>
                <p> Committed to delivering the best.</p>
                <p> Keep learning and adapting to new technologies. </p>
              </div>
            </div>
            <div className='subthrd' >
              <div>
                <p> Honest and transparent services. </p>
                <p> We care for your business just like ours.</p>
              </div></div>
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll animateOnce={ true } animateIn="animate__backInLeft">
          <div className=' advcont '>
            <h1>Why Choose Us Exactly?</h1>
            <p>we produce highly flexible, colorless and semi-crystalline resin in its natural state.
              Depending upon how it is processed, it can be semi-rigid to rigid. It shows good dimensional
              stability, resistance to impact, moisture, alcohols and solvents.
            </p>
            <div className=' adv '>
              <div className=' advgrid '>
                <div>
                  <img src='light.png' alt='' />
                  <p>30+ years of worldwide trust<br /><br />The safety of PET for food, beverage, pharmaceutical and medical applications has been repeatedly demonstrated through extensive studies,
                    regulatory approvals, testing, and its widespread acceptance for more than 30 years.</p>
                </div>
                <div>
                  <img src='ef.png' alt='' />
                  <p>Safety & sustainability<br /><br /> we use PET as it is approved as safe for contact with foods
                    and beverages by the FDA and health-safety agencies throughout the world.
                    PET does not contain bisphenol-A (BPA) or phthalates (plasticizers).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

      </div>
      <Footer />

    </>
  )
}
