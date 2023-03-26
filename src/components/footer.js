import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className='ff '>
      <div className='map '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1242.2687233704498!2d55.30163847722248!3d25.15577871046888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b334b7d3bb%3A0x4cc18e99b55206b1!2sDND%20Events%20L.L.C-FZ!5e0!3m2!1sar!2seg!4v1679330132381!5m2!1sar!2seg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='location'
        >
        </iframe>
      </div>
      <div className='xcon '>
        <div className='portion '>
          <div className='lgsf '>
            <img className='imx ' src='logo.jpg' alt='' />
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

          <ul className='ful '>
            <li className='xl '><Link to='/#mm' className='ll '><p>Home</p></Link></li>
            <li className='xl '><Link to='/Services#mm' className='ll '><p>Services</p></Link></li>
            <li className='xl '><Link to='/Aboutus#mm' className='ll '><p>About Us</p></Link></li>
            <li className='xl '><Link to='/Contactus#mm' className='ll '><p>Contact Us Now !</p></Link></li>
          </ul>
        </div>
        <div className='portion '>
          <div className='contact '>
            <h1>Quick Contact Info</h1>
            <p>
              Lorem ipsum dolor sit amet,
              the administration of justice,
              I may hear, finally, be expanded
              on, say, a certain pro cu neglegentur.
              Mazim.Unusual or something.
            </p>
            <p>
              <img src='location.png' alt='location' /> Business Center 1, M Floor , The Meydan Hotel, Nad Al Sheba, Dubai , U.A.E.
            </p>
            <p>
              <img src='phone.png' alt='phone' /> <a href="tel:0547807870">0547807870</a>
            </p>
            <p>
              <img src='mail.png' alt='mail' /> <a href="mailto:Info@damansolutions.com">Info@damansolutions.com</a>
            </p>
          </div>
        </div>


      </div>
    </footer>
  )
}
