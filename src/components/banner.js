import React from 'react'
import './banner.css'
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'

export default function Banner() {

    var [ z, setZ ] = useState( 0 );
    var i
    var x = [ 0, 1, 2, 3 ];
    const banner = () => {
        for ( i = 0; i < x.length; i++ ) {
            document.getElementById( `${ x[ i ] }` ).style.opacity = 0;
        }
        document.getElementById( `${ x[ z ] }` ).style.opacity = 1;
        setZ( z += 1 )
        if ( z > ( x.length - 1 ) ) { setZ( 0 ) }
    }
    useCallback( () => {
        setZ( 0 )
    }, [] )
    useCallback( setTimeout( banner, 3000 ) )

    return (
        <header className='head ' >
            <div id={ 0 } className='slz '>
                <p className='txtx '>Welcome To  <br /><br /> <strong>AlMASA</strong> .</p>
                <img src='btw.png' alt='' className='mid' />
                <img src='1.jpeg' alt='' className='bg ' />
            </div>
            <div id={ 1 } className='slz '>
                <p className='txtx '>We Are Experienced<br /><br /> In Plastic Solutions.</p>
                <img src='btw.png' alt='' className='mid' />
                <img src='2.jpeg' alt='' className='bg ' />
            </div>
            <div id={ 2 } className='slz '>
                <p className='txtx '>Variety Of Plastic <br /><br />Containers And Products </p>
                <img src='btw.png' alt='' className='mid' />
                <img src='3.jpeg' alt='' className='bg ' />
            </div>
            <div id={ 3 } className='slz '>
                <p className='txtx '>What Are You Waiting?<br /><br /><Link to='/Contactus' className='lnkbtn'>Contact Us</Link> Now!  </p>
                <img src='btw.png' alt='' className='mid' />
                <img src='4.jpeg' alt='' className='bg ' />
            </div>
        </header>
    )
}
