import React, { useEffect } from 'react'
import './homea.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Clientsa from './components/clientsa';
import Navbara from './components/navbara'
import Footera from './components/footera'
import Prefootera from './components/prefootera'
import Bannera from './components/bannera'
import Ula from './components/ula'



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
            <div className='a'>
                <div className='awhyuscont '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__backInDown">
                        <h1> وظفنا من اجل</h1>
                    </AnimationOnScroll>
                    <div className='awhyus '>
                        <div className='atelt '>
                            <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                                <h1>التصاريح الأمنية</h1>
                                <img src='security.jpg' alt='Security clearances' />
                                <p>مع فريقنا المؤهل نساعدك في جميع المعاملات لاستخراج التصاريح الأمنية.</p>
                            </AnimationOnScroll>
                        </div>

                        <div className='atelt '>
                            <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 600 } >
                                <h1>إنشاء مرفق</h1>
                                <img src='facility.jpg' alt='Facility establishing' />
                                <p>ضمن هذه الخطوة ، يجب توقيع المستندات المطلوبة لإتمام المعاملة للبلد.</p>
                            </AnimationOnScroll>
                        </div>

                        <div className='atelt '>
                            <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 1200 }>
                                <h1>الاقامة</h1>
                                <img src='residence.jpg' alt='residence visa extracting' />
                                <p>بمساعدة فريقنا ، نقوم بتسريع عملية استخراج الإقامة والتأشيرات المطلوبة.</p>
                            </AnimationOnScroll>
                        </div>

                    </div>
                    <hr style={ { width: '80%' } } />
                </div>

                <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">

                    <div className='aidea '>
                        <img src='idea.jpg' alt='Motivational Business Quote' />
                        <p>
                            <b>“</b>يستلزم الأمر فكرة وايمان والكثير من العمل الشاق , ولكن في النهاية تصبح الاحلام حقيقة<b>”</b>
                        </p>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">

                    <div className='avismis '>
                        <div className='anos '>
                            <img src='light.png' alt='' />
                            <h1>رؤيتنا</h1>
                            <p>نحن لا نسعى فقط إلى ضمان ، بل نحققه.
                                مجتمعنا من المستثمرين وكبار رجال الدولة والشخصيات العامة ورجال الأعمال
                                بحاجة إلى نظام متكامل وخدمة لا مثيل لها.
                                لذلك قمنا بعمل قمتنا الخاصة من خلال الاهتمام بكل احتياجاتهم من أجل تمهيد الطريق
                                نحو مستقبل أكثر ثباتًا وإشراقًا حيث ينتظرك نجاح اعظم.
                                رؤيتنا لا تنطبق فقط على بلدنا الحبيب ، الإمارات العربية المتحدة ، بل تمتد إلى العالم العربي.
                                وبالتالي ، فإننا نسعى جاهدين لتحقيق رؤيتنا العالمية لتحقيق نمو غير مسبوق في خدمة الأعمال
                                وقطاعات الاستثمار.
                            </p>
                        </div>
                        <div className='anos '>
                            <img src='target.png' alt='' />
                            <h1>مهمتنا</h1>
                            <p>مهمة ضمان لدينا هي التفوق على الرغم من ضيق الوقت
                                لإنجاز المهام الموكلة إلينا بأعلى مستويات الكفاءة
                                مع التأكيد على الحفاظ على مصداقيتنا وضمان أقصى درجات الشفافية
                                كل ذلك من أجل راحتك وتحقيق توقعاتك بما يحقق رضاك ​​وموافقتك.
                                مهمتنا هي مساعدتك على تحقيق أحلامك على الأرض ، والارتقاء بما نضعه على الأرض
                                لتتوجه إلى الغيوم ، وتحافظ على ذلك إلى الأبد.
                                مهمتنا هي أن تغلق عينيك وتفتحها على الحلول المبتكرة
                                لمشاكلك وطريق ممهد لنجاحك خالي من العوائق.
                            </p>
                        </div>
                    </div>
                    <hr style={ { width: '80%' } } />
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={ true } animateIn="animate__backInRight">
                    <div className='aadvcont '>
                        <h1>لماذا تختارنا بالضبط؟</h1>
                        <div className='aadv '>
                            <div className='aadvgrid '>
                                <div>
                                    <img src='star.png' alt='' />
                                    <p>الخبرة <br /> <br /> نحن الاختيار المناسب لمشروعك.
                                        لدينا الخبرة والمعرفة لتقديم المشورة المحايدة والخدمات</p>
                                </div>
                                <div><img src='dollar.png' alt='' />
                                    <p>السعر <br /> <br /> نحن نقدم خدماتنا بسعر صادق لضمان قدرتنا على مساعدة
                                        أي شخص على أي مستوى من البداية إلى النهاية</p>
                                </div>
                                <div>
                                    <img src='ear.png' alt='' />
                                    <p>التواصل <br /> <br /> معنا ستسمع. نستمع إلى متطلبات عملائنا ثم نختار الحل المناسب الذي يناسبك.
                                    </p>
                                </div>
                                <div>
                                    <img src='hand.png' alt='' />
                                    <p>التعاون <br /> <br /> نحن نهتم بعملك على أنه أعمالنا الخاصة.
                                        نحن نهتم به بصدق ونريد حقًا مساعدة شركتك على تحقيق إمكاناتها.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr style={ { width: '80%' } } />
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={ true } animateIn="animate__jackInTheBox">
                    <Clientsa />
                </AnimationOnScroll>
            </div>
            <Prefootera />
            <Footera />

        </>
    )
}
