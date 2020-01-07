import React from 'react';

function About() {
    return (
        <article id="about">
            <div className="container">
           

                    <div className="row">
                      <div className="col-lg-12">
                    <div className="about-me-box">

                        <h2>About <span>Me</span></h2>
                        <h3 >I design and code beautiful things, and i love what i do.</h3>
                        </div>
                    </div>
                </div>


                <div className=" info-about-me">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-img">
                                <img src="https://i.pinimg.com/originals/43/96/61/439661dcc0d410d476d6d421b1812540.jpg" alt="pic"></img>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <ul>
                                <li>
                                    First Name
                                          <span> Sabiha</span>
                                </li>
                                <li>
                                    Last Name
                                         <span> Farheen</span>
                                </li>
                                <li>
                                    Nationality
                                                  <span> Indian</span>
                                </li>
                                <li>
                                    Address
                                      <span> Hyderabad</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">

                            <ul className="ul-2">
                                <li>
                                    Language
                                          <span> English</span>
                                </li>
                                <li>
                                    Phone
                                         <span> +91-9603768407</span>
                                </li>
                                <li>
                                    Email
                                                  <span> sabihafarheen256@gmail.com</span>
                                </li>
                                <li>
                                    Skype 
                                      <span> sabiha farheen</span>
                                </li>
                            </ul>
                        </div>




                    </div>
                </div>
            </div>
        </article>

    )
}

export default About;