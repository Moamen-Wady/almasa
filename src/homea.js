import React, { useEffect } from 'react'
import './homea.css'
import './services.css'
import './contact.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footera from './components/footera'
import Navbara from './components/navbara'
import Ula from './components/ula'
import Bannera from './components/bannera'


export default function Homea() {

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

            <div className='avismis '>
                <div className='anos1'>
                    <h1> سنقدم أفضل الحلول والخدمات البلاستيكية الصناعية التي تناسب احتياجاتك وأعمالك.</h1>
                    <p>نحن ملتزمون بتقديم مجموعة متنوعة من الحاويات البلاستيكية. في الوقت الحالي على وجه الخصوص ، نبذل قصارى جهدنا لتوفير العبوة اللازمة لمنتجك للوصول إلى السوق. هدفنا هو إبهارك الآن وطوال عمر عملك.

                    </p>
                    <ul>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 300 } >
                            <li>- نظام مراقبة الجودة</li>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 400 } >
                            <li>- محترفون ومؤهلون</li>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 500 } >
                            <li>- 100٪ ضمان الرضا</li>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
                            <li>- مواد خام آمنة بيئيا</li>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
                            <li>- فريق عمل محترف للغاية</li>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
                            <li>- حلول مخصصة</li>
                        </AnimationOnScroll>

                    </ul>
                </div>
                <div className='anos2'><img src='5.jpg' alt='' /></div>
            </div>
            <hr style={ { width: "80%", color: "white" } } />

            <div className='aservcont ' >
                <AnimationOnScroll animateOnce={ true } animateIn="animate__backInDown">
                    <h1 style={ { color: "#083AA9" } }> خدماتنا</h1>
                </AnimationOnScroll>
                <div className='aserv '>
                    <div className='atelts '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                            <div>
                                <img src='es.png' alt='' />
                                <h1 style={ { color: "#083AA9" } }>سهل التشكيل</h1>
                                <p style={ { color: "black" } }>يمكن التلاعب بالبلاستيك أو تشكيله في أي تكوين ممكن.</p>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    <div className='atelts '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                            <div>
                                <img src='dollar.png' alt='' />
                                <h1 style={ { color: "#083AA9" } }> موفر في التكلفة</h1>
                                <p style={ { color: "black" } }>الحاويات البلاستيكية مخصصة في المقام الأول للتخزين المريح والرخيص ، ومن الضروري أن تكون متعددة الاستخدامات من أجل استيعاب المحتويات ذات الأشكال والأحجام المختلفة.</p>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    <div className='atelts '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 1200 }>
                            <div>
                                <img src='star.png' alt='' />
                                <h1 style={ { color: "#083AA9" } }>خفيف وقوي ودائم التحمل</h1>
                                <p style={ { color: "black" } }>البلاستيك خفيف ولكنه قوي ومتين حيث أن تكلفة الإنتاج المنخفضة تحافظ على مكانة البلاستيك كمادة مفضلة للصناعة.</p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div >

            <hr style={ { width: '80%' } } />

            <AnimationOnScroll animateOnce={ true } animateIn="animate__backInLeft">
                <div className='aadvcont '>
                    <h1>لماذا تختارنا بالضبط؟</h1>
                    <p>نحن ننتج راتينج عالي المرونة وعديم اللون وشبه بلوري في حالته الطبيعية.
                        اعتمادًا على كيفية معالجتها ، يمكن أن تكون شبه صلبة إلى صلبة. يظهر بعدا جيد
                        الاستقرار ومقاومة الصدمات والرطوبة والكحول والمذيبات.
                    </p>
                    <div className='aadv '>
                        <div className='aadvgrid '>
                            <div>
                                <img src='light.png' alt='' />
                                <p>أكثر من 30 عامًا من الثقة العالمية <br /> <br /> لقد تم إثبات سلامة PET للأطعمة والمشروبات والأدوية والتطبيقات الطبية بشكل متكرر من خلال دراسات مكثفة ،
                                    الموافقات التنظيمية والاختبارات وقبولها على نطاق واسع لأكثر من 30 عامًا.</p>
                            </div>
                            <div>
                                <img src='ef.png' alt='' />
                                <p>السلامة والاستدامة <br /> <br /> نستخدم مادة البولي إيثيلين تيرفثالات حيث تمت الموافقة على أنها آمنة للتلامس مع الأطعمة
                                    والمشروبات من قبل إدارة الغذاء والدواء ووكالات السلامة الصحية في جميع أنحاء العالم.
                                    لا تحتوي PET على ثنائي الفينول أ (BPA) أو الفثالات (الملدنات).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>

            <Footera />

        </>
    )
}
