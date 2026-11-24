import React from 'react'
import { skillSet } from './Utils.js/Constant'

export default function Skills() {
    return (
        <section className="cta-full" id="skills">
            <div className="container">
                <div className="row position-relative">
                    <div>
                        <div className="cta-full-img-box">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center mb-3">
                                    <div className="container-title" data-aos="fade-up">
                                        <div className="titles">
                                            <h4 className="title title-line text-capitalize mb-4">My Skills</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                {
                                    skillSet?.map((skill, i) => {
                                        return (
                                            <div className="col-lg-2 col-6 mt-4" key={`${i}-skill`}>
                                                <div className="explore-feature text-center aos-init aos-animate" data-aos="fade-up">
                                                    <div className="card-body p-0">
                                                        <div className="skill-icon d-inline-block">
                                                            <img src={skill} alt="" className="img-fluid mx-auto" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
