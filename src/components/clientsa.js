import React from 'react'
import './clientsa.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Clientsa() {
    const trig = () => {
        window.scrollBy( 0, 1 );
    }
    const trigm = () => {
        window.scrollBy( 0, -1 );
    }
    return (
        <div>
            <div className='aclientscont '>
                <h1>تحقق مما يقوله عملاؤنا عنا</h1>

                <div className='aclients '>
                    <div className="accard">
                        <img src='4.jpg' alt='' />
                        <div className="aoverlay" onMouseEnter={ trig }>
                            <div className="actext">
                                <AnimationOnScroll offset={ 50 } animateIn="animate__fadeInLeft" duration={ .3 }>
                                    <p>الاسم: ريادة الاعمال</p>
                                    <p>عملاؤنا لمدة: سنة واحدة</p>
                                    <p>تقييمهم لنا: 5 نجوم</p>
                                </AnimationOnScroll>

                            </div>
                        </div>
                    </div>
                    <div className="accard">
                        <img src='4.jpg' alt='' />
                        <div className="aoverlay" onMouseEnter={ trig }>
                            <div className="actext">
                                <AnimationOnScroll offset={ 50 } animateIn="animate__fadeInLeft" duration={ .3 }>
                                    <p>الاسم: ريادة الاعمال</p>
                                    <p>عملاؤنا لمدة: سنة واحدة</p>
                                    <p>تقييمهم لنا: 5 نجوم</p>
                                </AnimationOnScroll>

                            </div>
                        </div>
                    </div>
                    <div className="accard">
                        <img src='4.jpg' alt='' />
                        <div className="aoverlay" onMouseEnter={ trig }>
                            <div className="actext">
                                <AnimationOnScroll offset={ 50 } animateIn="animate__fadeInLeft" duration={ .3 }>
                                    <p>الاسم: ريادة الاعمال</p>
                                    <p>عملاؤنا لمدة: سنة واحدة</p>
                                    <p>تقييمهم لنا: 5 نجوم</p>
                                </AnimationOnScroll>

                            </div>
                        </div>
                    </div>
                    <div className="accard">
                        <img src='4.jpg' alt='' />
                        <div className="aoverlay" onMouseEnter={ trigm }>
                            <div className="actext">
                                <AnimationOnScroll offset={ 50 } animateIn="animate__fadeInLeft" duration={ .3 }>
                                    <p>الاسم: ريادة الاعمال</p>
                                    <p>عملاؤنا لمدة: سنة واحدة</p>
                                    <p>تقييمهم لنا: 5 نجوم</p>
                                </AnimationOnScroll>

                            </div>
                        </div>
                    </div>
                    <div className="accard">
                        <img src='4.jpg' alt='' />
                        <div className="aoverlay" onMouseEnter={ trigm }>
                            <div className="actext">
                                <AnimationOnScroll offset={ 50 } animateIn="animate__fadeInLeft" duration={ .3 }>
                                    <p>الاسم: ريادة الاعمال</p>
                                    <p>عملاؤنا لمدة: سنة واحدة</p>
                                    <p>تقييمهم لنا: 5 نجوم</p>
                                </AnimationOnScroll>

                            </div>
                        </div>
                    </div>
                    <div className="accard">
                        <img src='4.jpg' alt='' />
                        <div className="aoverlay" onMouseEnter={ trigm }>
                            <div className="actext">
                                <AnimationOnScroll offset={ 50 } animateIn="animate__fadeInLeft" duration={ .3 }>
                                    <p>الاسم: ريادة الاعمال</p>
                                    <p>عملاؤنا لمدة: سنة واحدة</p>
                                    <p>تقييمهم لنا: 5 نجوم</p>
                                </AnimationOnScroll>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
