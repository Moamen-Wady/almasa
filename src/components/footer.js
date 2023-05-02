import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className='ff '>
      <div className='map '>
        <div className='xfc'>
          <div className='container'>
            <div className='form'>
              <img src='/logon.jpg' alt='' />
              <p>
                Required Informations
              </p>
              <form action="submit.php" method="post" id="form">
                <input type="text" id="name" name="name" placeholder='Name / الاسم' />

                <input type="email" id="email" name="email" placeholder='E-mail / الايميل' />

                <input type="tel" id="phone" name="phone" placeholder='Your Phone Number / رقم التليفون' />

                <textarea id="notes" name="notes" placeholder='Notes / ملاحظات'></textarea>

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>

        

        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3419.405306345188!2d29.839245815138277!3d31.01495548153981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAwJzUzLjgiTiAyOcKwNTAnMjkuMiJF!5e0!3m2!1sen!2seg!4v1683054384097!5m2!1sen!2seg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='location'
        >
        </iframe>
      </div>

      <div className='xcon '>
        <div className='portion '>
          <div className='lgsf '>
            <img className='imx ' src='logon.jpg' alt='' />
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

          <ul className='ful '>
            <li className='xl '><Link to='/#mm' className='ll '><p>Home</p></Link></li>
            <li className='xl '><Link to='/Products#mm' className='ll '><p>Products</p></Link></li>
            <li className='xl '><Link to='/Aboutus#mm' className='ll '><p>About Us</p></Link></li>
            <li className='xl '><Link to='/Contactus#mm' className='ll '><p>Contact Us Now !</p></Link></li>
          </ul>
        </div>
        <div className='portion '>
          <div className='contact '>
            <h1>Almasa Pack</h1>
            <p>
              We Are Committed To Offer A Variety Of Plastic Containers.
              Especially Right Now, We’re Doing Everything We Can To Provide
              The Packaging Needed For Your Product To Hit The Market.
              Our Goal Is To Wow You, Now And Throughout The Life Of Your Business.
            </p>
            <p>
              <img src='location.png' alt='location' /> Qetaa an Nahdah, Amreya 1, Alexandria Governorate 5253703
            </p>
            <p>
              <img src='phone.png' alt='phone' /> <a href="tel:+20 110 112 2013">+20 110 112 2013</a>
            </p>
            <p>
              <img src='mail.png' alt='mail' /> <a href="mailto:Info@damansolutions.com">Info@almas.com</a>
            </p>
          </div>
        </div>


      </div>
    </footer>
  )
}
