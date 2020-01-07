import React from 'react';

function Skills() {
    return (
        <article id="skills">
            <div className="container">

                <div className="skills">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>My <span>Skills</span></h2>
                            <h3>My Ability For Your Project</h3>
                            

                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="skills-bar">
                            
                            <div className="skillbar">
                                <span className="skillbar-title">HTML5</span>
                                <span className="skill-ratings">80%</span>
                                <div className="progress">
                                    <div className="progress-bar  p1" ></div>
                                </div>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">CSS3</span>
                                <span className="skill-ratings">80%</span>
                                <div className="progress">
                                    <div className="progress-bar  p2" ></div>
                                </div>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">C</span>
                                <span className="skill-ratings">60%</span>
                                <div className="progress">
                                    <div className="progress-bar  p5" ></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skills-bar">
                            <div className="skillbar">
                                <span className="skillbar-title">JavaScript</span>
                                <span className="skill-ratings">60%</span>
                                <div className="progress">
                                    <div className="progress-bar    p3" ></div>
                                </div>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">react</span>
                                <span className="skill-ratings">50%</span>
                                <div className="progress">
                                    <div className="progress-bar  p4" ></div>
                                </div>
                            </div>
                            <div className="skillbar">
                                <span className="skillbar-title">Java</span>
                                <span className="skill-ratings">60%</span>
                                <div className="progress">
                                    <div className="progress-bar p6" ></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="progress-circle">
                            <div className="circle1">
                                <h3>90%</h3>
                            </div>
                            <span>English</span>
                        </div>
                        <div className="progress-circle">
                            <div className="circle2">
                                <h3>100%</h3>
                            </div>
                            <span>Hindi</span>
                        </div>
                        <div className="progress-circle">
                            <div className="circle3">
                                <h3>70%</h3>
                            </div>
                            <span>Telugu</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Skills;