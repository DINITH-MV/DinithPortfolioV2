import React from "react";
import { Link} from 'react-scroll'


const Hero = () => {
    return (
        <section className="static-hero" id='home'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2><span>Hi There,</span>
                                            I'm DINITH VANDERLAN!</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-sub-title">
                                        <h5>Software Engineer Undergraduate</h5>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>Build innovative, scalable, and secure software solutions that drive technological and sustainable progress.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true}  duration={500}>Hire Me</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img src='images/slider/profile No1.png' style={{"width":"60vh"}} alt="" />
                        <div className="icon-1 floating-item"><img src='images/icon/nextjs.svg' alt="" /></div>
                        <div className="icon-2 floating-item"><img src='images/icon/react.svg' style={{"border-radius":"20px"}} alt="" /></div>
                        <div className="icon-3 floating-item"><img src='images/icon/node.svg' alt="" /></div>
                        
                        <div className="project floating-item">
                            <div className="icon">
                            <img src='images/icon/kotlin.svg' style={{"width":"55px","height":"55px","border-radius":"30%","marginRight":"10px"}} alt="" />
                            <img src='images/icon/python.svg' style={{"width":"60px","height":"60px"}} alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="1038" height="938" viewBox="0 0 1038 938" fill="none">
                    <g opacity="0.5" filter="url(#filter0_f_39_4392)">
                        <circle cx="290.5" cy="282.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392" />
                        </filter>
                    </defs>
                </svg>
            </div>
            
            <div className="shape-3">
                <svg width="752" height="747" viewBox="0 0 752 747" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4394)">
                        <circle cx="647.5" cy="99.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394" />
                        </filter>
                    </defs>
                </svg>
            </div>
            
            
        </section>
    )
}

export default Hero;