import React from 'react';

function Home() {
    return (
        <article id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-img">
                            <img src="https://i.pinimg.com/originals/43/96/61/439661dcc0d410d476d6d421b1812540.jpg" alt="pic"></img>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="banner">
                            <h3>HI THERE !</h3>
                            <h1>
                                I'M
                                 <span className="wrapper">
                                    <b > Sabiha Farheen</b>
                                    {/* <b> A Web Developer</b>
                                    <b>A Web Designer</b> */}
                                </span>

                            </h1>
                            <p>I'm a Freelance UI/UX Designer and Developer based in Hyderabad, India.
                    I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                            <div className="banner-btns">
                                <a href="#about" className="btn btn-primary">
                                    <span>
                                        <i className="fa fa-user" aria-hidden="true"></i>More About Me
                                        </span>
                                </a>
                                <a href="#portfolio" className="btn btn-secondary">
                                    <span>
                                        <i className="fa fa-suitcase" aria-hidden="true"></i>Portfolio
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </article>
    )
}



export default Home;


