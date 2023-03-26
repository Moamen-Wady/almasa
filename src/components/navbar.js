import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    var p = window.location.pathname
    var s = p + " "
    var x = p.slice( 0, 1 )
    var en = s.slice( 3, -1 )
    var xx = s.slice( 1, -1 )

    function xs() {
        console.log( p )
    }
    xs()
    return (
        <div className='nvbr ' id="mm">
            <div className='topbar '>
                <div>
                    <p>Welcome To AlMasa Solutions</p>
                    <div className='lgs '>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="fb.png" alt=""
                            /></a>
                        <a
                            href="https://instagram.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="ig.png" alt=""
                            /></a>
                        <a
                            href="https://eg.linkedin.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="li.png" alt=""
                            /></a>
                        <a
                            href="https://twitter.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="tw.png" alt=""
                            /></a>
                    </div>
                </div>
            </div>
            <div className='mid-nvb'>
                <img className='img1 ' src='logo.jpg' alt='' />
                <div className='ncontact'>
                    <img src='location.png' alt='location' />
                    <p>
                        Business Center
                    </p>
                    <img src='phone.png' alt='phone' />
                    <p>
                        <a href="tel:">0547807870</a>
                    </p>
                    <img src='mail.png' alt='mail' />
                    <p>
                        <a href="mailto:">solutions.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
