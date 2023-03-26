import React from 'react'
import './footera.css'
import { Link } from 'react-router-dom'


export default function Footera() {
    return (
        <footer className='aff '>
            <div className='amap '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1242.2687233704498!2d55.30163847722248!3d25.15577871046888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b334b7d3bb%3A0x4cc18e99b55206b1!2sDND%20Events%20L.L.C-FZ!5e0!3m2!1sar!2seg!4v1679330132381!5m2!1sar!2seg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='location'
                >
                </iframe>
            </div>
            <div className='axcon '>
                <div className='aportion '>
                    <div className='algsf '>
                        <img className='aimx ' src='logo.png' alt='' />
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

                    <ul className='aful '>
                        <li className='axl '><Link to='/#mm' className='all '><p>الصفحة الرئيسية</p></Link></li>
                        <li className='axl '><Link to='/Services#mm' className='all '><p>الخدمات</p></Link></li>
                        <li className='axl '><Link to='/Aboutus#mm' className='all '><p>اعرف عنا</p></Link></li>
                        <li className='axl '><Link to='/Contactus#mm' className='all '><p>تواصل معنا الاّن</p></Link></li>
                    </ul>
                </div>
                <div className='aportion '>
                    <div className='acontact '>
                        <h1>معلومات التواصل</h1>
                        <p>
                            أبجد هوز دولور الجلوس امات،
                            إقامة العدل ،
                            قد أسمع ، أخيرًا ، يتم توسيعها
                            على سبيل المثال ، عامل مهمل معين.
                            Mazim. غير عادي أو شيء من هذا القبيل.
                        </p>
                        <p>
                            <img src='location.png' alt='location' /> مركز الأعمال 1 ، طابق الميزانين ، فندق الميدان ، ند الشبا ، دبي ، الإمارات العربية المتحدة.

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
