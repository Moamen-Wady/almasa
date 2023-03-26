import React from 'react'
import './bannera.css'
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'

export default function Bannera() {

    var [ z, setZ ] = useState( 0 );
    var i
    var x = [ 4, 5, 6, 7 ];
    const banner = () => {
        for ( i = 0; i < x.length; i++ ) {
            document.getElementById( `${ x[ i ] }` ).style.opacity = 0;
        }
        document.getElementById( `${ x[ z ] }` ).style.opacity = 1;
        setZ( z += 1 )
        if ( z > ( x.length - 1 ) ) { setZ(0) }
    }
    useCallback( () => {
        setZ( 0 )
    }, [] )

    useCallback( setTimeout( banner, 3000 ) )

    return (
        <header className='ahead ' >
            <div id={ 4 } className='aslz '>
                <p className='atxtx '>أهلا بكم في  <br /><br /> <strong>ضمان</strong> للحلول المبتكرة.</p>
                <img src='btw.png' alt='' className='amid' />
                <img src='1.jpeg' alt='' className='abg ' />
            </div>
            <div id={ 5 } className='aslz '>
                <p className='atxtx '>شركة استشارة مهنية للاعمال الناشئة<br /><br />مقرها الامارات العربية المتحدة.</p>
                <img src='btw.png' alt='' className='amid' />
                <img src='2.jpeg' alt='' className='abg ' />
            </div>
            <div id={ 6 } className='aslz '>
                <p className='atxtx '>طور من اعمالك <br /><br />و حقق نجاحك<br /><br />معنا!</p>
                <img src='btw.png' alt='' className='amid' />
                <img src='3.jpeg' alt='' className='abg ' />
            </div>
            <div id={ 7 } className='aslz '>
                <p className='atxtx '>انضم الى عائلتنا...<br /><br /><Link to='/Contactus' className='alnkbtn'>تواصل معنا</Link><br /><br />الاّن!  </p>
                <img src='btw.png' alt='' className='amid' />
                <img src='4.jpeg' alt='' className='abg ' />
            </div>
        </header>
    )
}
