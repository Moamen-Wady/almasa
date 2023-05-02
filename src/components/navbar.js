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
                <p>WELCOME TO ALMASA</p>
                    <div className='lgs '>
                        <div className="lang">
                            <span><img src='uk.png' alt='' /></span>
                            <div className="langc">
                                <Link to={ x + "ar" + xx } className='lanlink'>العربية</Link>
                            </div>
                        </div>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank" rel="noreferrer"
                        ><img src="fb.png" alt=""
                            /></a>
                        <a
                            href="https://instagram.com/almasapackpackaging?igshid=YmMyMTA2M2Y="
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
        </div>
    )
}
