import React from 'react'
import './bannera.css'
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'

export default function Bannera() {

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
        <header className='ahead ' >
            <div id={ 0 } className='aslz '>
                <p className='atxtx '>مرحبا بكم في   <br /><br /> <strong>الماسة</strong> .</p>
                <img src='11.jpg' alt='' className='abg ' />
            </div>
            <div id={ 1 } className='aslz '>
                <p className='atxtx '>نحن خبراء في <br /><br /> الصناعات البلاستيكية  .</p>
                <img src='btw.png' alt='' className='amid' />
                <img src='2.jpg' alt='' className='abg ' />
            </div>
            <div id={ 2 } className='aslz '>
                <p className='atxtx '>مجموعة متنوعة من <br /><br />الحاويات و المنتجات </p>
                <img src='btw.png' alt='' className='amid' />
                <img src='3.jpg' alt='' className='abg ' />
            </div>
            <div id={ 3 } className='aslz '>
                <p className='atxtx '>ماذا تنتظر<br /><br /><Link to='/Contactus' className='alnkbtn'>تواصل معنا</Link> الان  </p>
                <img src='btw.png' alt='' className='amid' />
                <img src='4.jpg' alt='' className='abg ' />
            </div>
        </header>
    )
}
