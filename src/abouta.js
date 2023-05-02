import React, { useEffect } from 'react'
import './abouta.css'
import Navbara from './components/navbara'
import Footera from './components/footera'
import Bannera from './components/bannera'
import Ula from './components/ula'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Aboutusa() {

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

            <div className='aaboutcont' >
                <div className='afirst x8'>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn" duration={ 1.5 }>

                        <h1>عن الماسة</h1>
                        <p>
                            نحن ملتزمون بتقديم مجموعة متنوعة من الحاويات البلاستيكية.
                            في الوقت الحالي على وجه الخصوص ، نحن نفعل كل ما في وسعنا لتقديم
                            العبوة المطلوبة لمنتجك للوصول إلى السوق.
                            هدفنا هو إبهارك الآن وطوال عمر عملك.
                        </p>
                    </AnimationOnScroll>
                </div>

                <div className='asnd'>
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

                    <img src='2.jpg' alt='future development' />
                </div>

                <div className='afirst'>

                    <p>
                        لذلك ، نحن نفهم تمامًا حاجتك.
                        بعد كل شيء ، نحن في الماسة لدينا نفس الحاجة.
                        لهذا السبب نقوم بتصنيع العبوات البلاستيكية لأسلوب حياة صحي وأفضل
                        التي تتميز بأعلى جودة وتصميم أكثر فائدة.
                    </p>
                    <hr style={ { width: '80%' } } />
                </div>

                <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">

                    <div className='avismis '>
                        <div className='anos '>
                            <img src='light.png' alt='' />
                            <h1>رؤيتنا</h1>
                            <p>لتقديم مجموعة متنوعة من الحاويات البلاستيكية.
                                خاصة في الوقت الحالي ، نحن نفعل كل شيء
                                يمكننا توفير العبوة اللازمة لك
                                منتج لتصل إلى السوق. هدفنا هو إبهارك ،
                                الآن وطوال عمر عملك.
                            </p>
                        </div>
                        <div className='anos '>
                            <img src='target.png' alt='' />
                            <h1>مهمتنا</h1>
                            <p>نحن ملتزمون بتقديم مجموعة متنوعة من الحاويات البلاستيكية.
                                في الوقت الحالي على وجه الخصوص ، نحن نبذل قصارى جهدنا لتقديم
                                العبوة اللازمة لمنتجك للوصول إلى السوق.
                                هدفنا هو إبهارك الآن وطوال عمر عملك.
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>


                <div className='athrd' >

                    <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown" delay={ 300 } >
                        <h1>مبادءنا الاساسية</h1>
                        <div className='asubthrd' >
                            <div>
                                <p> ملتزمون بتقديم الأفضل.</p>
                                <p> نستمر في التعلم والتكيف مع التقنيات الجديدة. </p>
                            </div>
                        </div>
                        <div className='asubthrd' >
                            <div>
                                <p> خدمات صادقة وشفافة. </p>
                                <p> نحن نهتم بعملك تمامًا مثل أعمالنا.</p>
                            </div></div>
                    </AnimationOnScroll>
                </div>

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

            </div>
            <Footera />

        </>
    )
}
