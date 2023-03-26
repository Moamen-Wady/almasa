import React, { useEffect, useState } from 'react'
import './contact.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import Banner from './components/banner'
import Ul from './components/ul'
import api from './components/api.js'
export default function Contactus() {

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


    var [ name, setname ] = useState( '' )
    var [ phone, setphone ] = useState( '' )
    var [ note, setnote ] = useState( '' )
    var [ mail, setmail ] = useState( '' )
    var [ activity, setactivity ] = useState( '' )
    var [ residence, setresidence ] = useState( '' )
    var [ alert, setalert ] = useState( <></> )


    const handleChange1 = ( event ) => {
        var value = event.target.value;
        setname( value );
    };

    const handleChange2 = ( event ) => {
        var value = event.target.value;
        setphone( value );
    };

    const handleChange4 = ( event ) => {
        var value = event.target.value;
        setactivity( value );
    };

    const handleChange3 = ( event ) => {
        var value = event.target.value;
        setresidence( value );
    };

    const handleChange5 = ( event ) => {
        var value = event.target.value;
        setnote( value );
    };
    const handleChange6 = ( event ) => {
        var value = event.target.value;
        setmail( value );
    };

    function taker( e ) {
        e.preventDefault()
        if ( name === '' || phone === '' || mail === '' || activity === '' || residence === '' || note === '' ) {
            window.alert( "PLEASE FILL ALL FIELDS IN THE FORM" );
        }
        else { send() }
    };


    const send = async () => {
        var respon = ( await api.post( '/mail', {
            name: name,
            phone: phone,
            residence: residence,
            note: note,
            activity: activity,
            mail: mail
        } ) ).data;
        if ( respon.st == 'ok' ) {
            setalert( <p style={ { color: 'green' } }>Your Message Was Sent Successfully</p> )
        }
        if ( respon.st == 'error' ) {
            setalert( <p style={ { color: 'red' } }>There Has Been An Error, Please try Again</p> )
        }
        setTimeout( clearNote, 2000 )
    }

    function clearNote() {
        setalert( <p ></p> )
    }

    const reset = ( e ) => {
        e.preventDefault()
        document.getElementById( 'form' ).reset()
        setalert( <p style={ { color: 'green' } }>Form Cleared</p> )
        setTimeout( clearNote, 2000 )
    }

    return (
        <>
            <Navbar />
            <Ul />
            <Banner />

            <div className='container'>
                <div className='form1'>
                    <div className='form'>
                        <img src='/logo.jpg' alt='' />
                        <p>
                            Required Informations
                        </p>
                        <form action="submit.php" method="post" id="form">
                            <input type="text" id="name" name="name" placeholder='Name / الاسم' />

                            <input type="email" id="email" name="email" placeholder='E-mail / الايميل' />

                            <input type="tel" id="phone" name="phone" placeholder='Your Phone Number / رقم التليفون' />

                            <input type="text" id="activity" name="activity" placeholder='Activity / نوع النشاط' />

                            <input type="number" id="residence" name="residence" placeholder='Number of Residences or Investors / عدد الاقامات او المستثمرين' />

                            <textarea id="notes" name="notes" placeholder='Notes / ملاحظات'></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Prefooter />
            <Footer />

        </>
    )
}
