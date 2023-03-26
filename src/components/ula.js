import React from 'react'
import './navbara.css'
import { Link } from 'react-router-dom'

export default function Ula() {

    return (
        <ul className='aul1 '>
            <li className='al limg'><img className='aimg1 ' src='logo.png' alt='' /></li>
            <li className='al '><Link to='/ar#mm' className='all '><p>الصفحة الرئيسية</p></Link></li>
            <li className='al '><Link to='/arProducts#mm' className='all '><p>المنتجات</p></Link></li>
            <li className='al '><Link to='/arAboutus#mm' className='all '><p>اعرف عنا</p></Link></li>
            <li className='ar '><Link to='/arContactus#mm' className='all '><p>تواصل معنا</p></Link></li>
        </ul>
    )
}
