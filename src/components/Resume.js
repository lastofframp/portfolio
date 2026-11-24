import React from 'react'
import { resumeDetail } from './Utils.js/Constant'
export default function Resume() {
    return (
        <section className="section" id="resume">
            <div className="container">

                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <div className="work-content mt-4" data-aos="fade-up">
                            <h2 className="text-capitalize">{resumeDetail.title}</h2>
                            <p className="mb-0 text-light-muted">{resumeDetail.description}</p>
                        </div>
                    </div>

                    <div className="col-lg-8 ">
                        <div className="row">
                            <div className="main-timeline" data-aos="fade-up">
                                {
                                    Object.keys(resumeDetail?.timeline)?.map((key) => {
                                        return resumeDetail?.timeline[key]?.layoutPostion === 'left' ?
                                            (
                                                <div className="timeline mt-4" key={key}>
                                                    <a href="/#" className="timeline-content">
                                                        <div className="timeline-icon text-primary">
                                                            <img src={resumeDetail?.timeline[key]?.companyLogo} alt={key} className="fea icon-md" />
                                                        </div>
                                                        <h3 className="title mb-0">{resumeDetail?.timeline[key]?.designation}</h3>
                                                        <small className="company">{key}</small>
                                                        <span className="badge skill-badge education-badge badge-light">{resumeDetail?.timeline[key]?.duration}</span>
                                                        <p className="description text-light-muted mt-2">
                                                            Skills: {
                                                                resumeDetail?.timeline[key]?.skills?.map((obj, i) => {
                                                                    return resumeDetail?.timeline[key]?.skills?.length - 1 === i ? `${obj}` : `${obj}, `
                                                                })
                                                            }
                                                        </p>
                                                    </a>
                                                </div>

                                            ) :
                                            (
                                                <div className="timeline mt-4" key={key}>
                                                    <a href="/#" className="timeline-content">
                                                        <div className="timeline-icon text-primary">
                                                            <img src={resumeDetail?.timeline[key]?.companyLogo} alt={key} className="fea icon-md" />
                                                        </div>
                                                        <h3 className="title mb-0">{resumeDetail?.timeline[key]?.designation}</h3>
                                                        <small className="company">{key}</small>
                                                        <span className="badge skill-badge education-badge margin-20 badge-light">{resumeDetail?.timeline[key]?.duration}</span>
                                                        <p className="description text-light-muted mt-2">
                                                            {/* <ul class="list-disc">
                                                            {
                                                                resumeDetail?.timeline[key]?.skills?.map((obj, i) => {
                                                                    return <li>{obj}</li>
                                                                })
                                                            }
                                                            </ul> */}
                                                        </p>
                                                    </a>
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
