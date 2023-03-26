import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Ul() {
    var p = window.location.pathname
    var s = p + " "
    var x = p.slice( 0, 1 )
    var en = s.slice( 3, -1 )
    var xx = s.slice( 1, -1 )

    return (
        <>
            <ul className='ul1 '>
                <li className='l '><Link to='/#mm' className='ll '><p>Home</p></Link></li>
                <li className='l '><Link to='/Products#mm' className='ll '><p>Products</p></Link></li>
                <li className='l '><Link to='/Aboutus#mm' className='ll '><p>About Us</p></Link></li>
                <li className='r '><Link to='/Contactus#mm' className='ll '><p>Contact Us Now !</p></Link></li>
            </ul>
        </>
    )
}
