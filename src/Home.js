import React, { useEffect } from 'react'
import Clients from './components/clients'
import './home.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import Banner from './components/banner'
import Ul from './components/ul'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Home() {

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

                <div className=' whyuscont '>
            <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
                    <h1> Hire Us For</h1>
            </AnimationOnScroll>
                    <div className=' whyus '>
                            <div className=' telt '>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInLeft" >
                                <h1>Security Clearances</h1>
                                <img src='security.jpg' alt='Security clearances' />
                                <p>With our qualified team, we help you in all transactions to extract the security clearances.</p>
                        </AnimationOnScroll>
                            </div>

                            <div className=' telt '>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInLeft" delay={600} >
                                <h1>Establishing A Facility</h1>
                                <img src='facility.jpg' alt='Facility establishing' />
                                <p>Within this step, the required documents shall be signed in order to complete the transaction for the country.</p>
                        </AnimationOnScroll>
                            </div>

                            <div className=' telt '>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInLeft" delay={1200}>
                                <h1>Residence</h1>
                                <img src='residence.jpg' alt='residence visa extracting' />
                                <p>With the help of our team, we speed up the process of extracting the required residence and visas.</p>
                        </AnimationOnScroll>
                            </div>

                    </div>
                    <hr style={ { width: '80%' } } />
                </div>

            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">

                <div className=' idea '>
                    <img src='idea.jpg' alt='Motivational Business Quote' />
                    <p>
                        <b>“</b>It Takes An Idea, Faith And Immense Amount Of Hard Working...
                        But, Eventually, Dreams Come True.<b>”</b>
                    </p>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">

                <div className=' vismis '>
                    <div className=' nos '>
                        <img src='light.png' alt='' />
                        <h1>Our Vision</h1>
                        <p>We don’t climb up to Daman, we make it.
                            Our community of investors, elder statesmen, public figures and businessmen
                            are in need of an integrated system and an unparalleled service.
                            So we made our own summit by tending to their every need in order to smoothen the path
                            towards a steadier and brighter future where great success awaits.
                            Our vision does not only apply to our beloved country, United Arab Emirates, but extends to the Arabic world.
                            Thus, we strive to realize our global vision of achieving unprecedented growth in serving the business
                            and investment sectors.
                        </p>
                    </div>
                    <div className=' nos '>
                        <img src='target.png' alt='' />
                        <h1>Our Mission</h1>
                        <p>The mission of our Daman is to excel despite the short time window
                            to accomplish the tasks entrusted to us with the highest levels of efficiency
                            with an emphasis on maintaining our credibility and ensuring the utmost transparency
                            all for your comfort and fulfilling your expectations so as to achieve your satisfaction and approval.
                            Our mission is to help you realize your dreams on the ground, and to rise up with what we put on the ground
                            to head to the clouds, and to preserve that forever.
                            Our mission is for you to close your eyes and open them to innovative solutions
                            for your problems and a paved road to your success, free of obstacles.
                        </p>
                    </div>
                </div>
                <hr style={ { width: '80%' } } />
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={true} animateIn="animate__backInLeft">
                <div className=' advcont '>
                    <h1>Why Choose Us Exactly?</h1>
                    <div className=' adv '>
                        <div className=' advgrid '>
                            <div>
                                <img src='star.png' alt='' />
                                <p>Expertise<br /><br />We are the right term for your business.
                                    We have the expertise and knowledge to offer impartial advice and services</p>
                            </div>
                            <div><img src='dollar.png' alt='' />
                                <p>Price<br /><br /> We Offer Our Services At An Honest Price To Ensure We Could Help
                                    Anyone At Any level From The Beginning To The End</p>
                            </div>
                            <div>
                                <img src='ear.png' alt='' />
                                <p>Communication <br /><br /> With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits.
                                </p>
                            </div>
                            <div>
                                <img src='hand.png' alt='' />
                                <p>Co-operation<br /><br /> We care for your business as our own.
                                    We take a sincere interest in it and genuinely want to help your company reach its potential.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr style={ { width: '80%' } } />
                </div>
            </AnimationOnScroll>

            <Prefooter />
            <Footer />

        </>
    )
}
