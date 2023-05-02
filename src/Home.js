import React, { useEffect } from 'react'
import './home.css'
import './contact.css'
import './services.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
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

            <div className=' vismis '>
                <div className='nos1'>
                    <h1> We Will Provide Best Industrial Plastic Solutions and Services that fits your needs and business.</h1>
                    <p>We are committed to offer a variety of plastic containers. Especially right now, we’re doing everything we can to provide the packaging needed for your product to hit the market. Our goal is to wow you, now and throughout the life of your business.
                    </p>
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
                </div>
                <div className='nos2'><img src='5.jpg' alt='' /></div>
            </div>
            <hr style={ { width: "80%", color: "white" } } />

            <div className=' servcont ' >
                <AnimationOnScroll animateOnce={ true } animateIn="animate__backInDown">
                    <h1> Our Services</h1>
                </AnimationOnScroll>
                <div className=' serv '>
                    <div className=' telts '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                            <div>
                                <img src='es.png' alt='' />
                                <h1>Easly shaped</h1>
                                <p>Plastic is capable of being manipulated or shaped into any configuration possible.</p>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    <div className=' telts '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                            <div>
                                <img src='dollar.png' alt='' />
                                <h1>Cost Efficient</h1>
                                <p>Plastic containers are primarily intended for cheap and convenient storage, it is essential that they be versatile in order to accommodate contents of many different shapes and sizes</p>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    <div className=' telts '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 1200 }>
                            <div>
                                <img src='star.png' alt='' />
                                <h1>Light, Strong & Durable</h1>
                                <p>Plastic is light but strong and durable as low production cost seals plastic’s position as a preferred material for industry.</p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div >

            <hr style={ { width: '80%' } } />

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

            <Footer />

        </>
    )
}
