import './servicesa.css'
import React, { useEffect } from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Clientsa from './components/clientsa';
import Navbara from './components/navbara'
import Footera from './components/footera'
import Prefootera from './components/prefootera'
import Bannera from './components/bannera'
import Ula from './components/ula'


export default function Servicesa() {

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
    return (
        <>
            <Navbara />
            <Ula />
            <Bannera />

            <div className='aservcont '>
                <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
                    <h1>كيف يمكننا مساعدتك؟</h1>
                </AnimationOnScroll>

                <div className='aserv '>
                    <div className='atelts '>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInRight" >
                            <div>
                                <h1>تسجيل الشركة في دولة الامارات</h1>
                                <ul>
                                    <li>تصريح اقامة في دبي</li>
                                    <li>عدد غير محدود من التأشيرات</li>
                                    <li>المزيد من الأنشطة التجارية المتاحة للترخيص.</li>
                                    <li>١٠٠% ملك لشركتك , ١٠٠% اعفاء ضريبي</li>
                                    <li>التجارة في دول مجلس التعاون الخليجي ، فتح حسابات بنكية</li>
                                </ul>
                            </div>
                        </AnimationOnScroll>

                    </div>
                    <div className='atelts '>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInRight" delay={ 600 }>
                            <div>
                                <h1>بدء الأعمال في المنطقة الحرة.</h1>
                                <ul>
                                    <li>لا ملكية أجنبية</li>
                                    <li>ضريبة الدخل صفر ، صفر ضريبة الشركات.</li>
                                    <li>لا توجد ضرائب على الصادرات ولا قيود على العملة وإعادة الأموال.</li>
                                    <li>لا قيود على تعيين موظفين أجانب.</li>
                                    <li>التجارة في دول مجلس التعاون الخليجي ، فتح حسابات بنكية.</li>
                                </ul>
                            </div>
                        </AnimationOnScroll>

                    </div>
                    <div className='atelts '>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInRight" delay={ 1200 }>
                            <div>
                                <h1>الشركات الخارجية.</h1>
                                <ul>
                                    <li>توفير بوابة للتوسع في السوق الدولية.</li>
                                    <li>الوصول إلى نظام قانوني مستقر وملائم للأعمال.</li>
                                    <li>تقديم وصول أفضل إلى التمويل العالمي.</li>
                                    <li>الوصول إلى نظام تنظيمي أكثر مرونة.</li>
                                    <li>تقديم الحياد الضريبي على الأرباح الدولية فيما يتعلق (حسب الولاية القضائية) بالدخل الشخصي أو الشركة ، ومكاسب رأس المال وضرائب الميراث.</li>
                                </ul>
                            </div>
                        </AnimationOnScroll>

                    </div>
                </div>
            <hr style={ { width: '80%' } } />
            <AnimationOnScroll animateOnce={true} animateIn="animate__jackInTheBox">
                <Clientsa />
            </AnimationOnScroll>
            </div>
            <Prefootera />
            <Footera />

        </>
    )
}
