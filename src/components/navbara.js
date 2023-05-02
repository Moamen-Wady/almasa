import React from 'react'
import { Link } from 'react-router-dom'
import './navbara.css'

export default function Navbara() {

    var p = window.location.pathname
    var s = p + " "
    var x = p.slice( 0, 1 )
    var en = s.slice( 3, -1 )
    var xx = s.slice( 1, -1 )


    return (
        <div className='anvbr ' id="mm">
            <div className='atopbar '>
                <div>
                    <p>مرحبا بكم في الماسة</p>
                    <div className='algs '>
                        <div className="alang">
                            <span><img src='uae.png' alt='' /></span>
                            <div className="alangc">
                                <Link to={ '/' + en} className='alanlink'>English</Link>
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
