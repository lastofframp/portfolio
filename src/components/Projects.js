import React from 'react'
import { projectsList } from './Utils.js/Constant'

export default function Projects() {
    return (
        <section className="section bg-light" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">My Work & Portfolio</h2>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        Object.keys(projectsList)?.map((key) => {
                            return (
                                <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt-4 pt-2" key={`${key}-project`}>
                                    <div className="card border-0 rounded">
                                        <div className="work-container work-modern position-relative d-block overflow-hidden">
                                            <a className="card-body p-0" href={projectsList[key].url} target="_blank">
                                                <img src={projectsList[key]?.imgPath} className="img-fluid " alt={projectsList[key]?.title} />                                           
                                            </a>
                                        </div>
                                     
                                        <div className="p-3" >
                                            <span className="mb-0 "><h6 target="_blank" href="https://clutchwallet.xyz/" className="title text-capitalize " >{projectsList[key]?.title}</h6></span>
                                            <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto text-pre-line" >{projectsList[key].description}</p>
                                            <div className="content">
                                                <div className="text-black tag mb-0 mt-2">
                                                    <div className='text-muted pt_skill'>
                                                    {
                                                        projectsList[key]?.techStack?.map((skill, i) => {
                                                            return (                                                                
                                                                <span className="pt_skill_item" key={i}>{skill}</span>                                                                
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
