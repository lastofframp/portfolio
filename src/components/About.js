import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function About() {
    return (
        <section className="bg-light" id="aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card public-profile border-0 rounded shadow" style={{ zIndex: 1 }}>
                            <div className="card-body">
                                <div className="row align-items-center" data-aos="fade-up">
                                    <div className="col-lg-3 col-md-4 text-md-start">
                                        <div className="about-details key-feature bg-light">
                                            <div className="media-body content">
                                                <h6 className="title mb-2">Personal Details</h6>
                                                <div className="bor-bottom mt-2 mb-2"></div>
                                                <p className="text-muted mb-2 mt-3 font-14"><a href='/' className="text-black">Email: </a>armsteaddaylin95@gmail.com</p>
                                                <p className="text-muted mb-2 font-14"><a href='/' className="text-black">Location: </a>Philadelphia, PA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-md-8">
                                        <div className="row align-items-end">
                                            <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                                                <h4 className="heading me-2">I am a {' '}

                                                    <span className="element text-primary" data-elements="Web Developer, Mobile App Developer"></span>
                                                    <TypeAnimation
                                                        sequence={[
                                                            'Web Developer', 
                                                            2000,
                                                            'Mobile App Developer', 
                                                            2000,
                                                            
                                                        ]}
                                                        wrapper="span"
                                                        className="element text-primary"
                                                        cursor={true}
                                                        repeat={Infinity}
                                                        
                                                    />
                                                </h4>
                                                <p className="text-light-muted mt-2">Senior Full Stack Developer with over 10 years of experience in building high-quality web and mobile applications. Proven track record of delivering performant, scalable, and user-centric solutions across diverse industries. Known for exceeding client expectations through a strong commitment to code quality, rapid delivery, and seamless user experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
