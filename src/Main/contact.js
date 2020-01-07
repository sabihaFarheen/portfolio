import React from 'react';

function Contact() {
    return (
        <article id="contact">
            <div className="container">

                <div className="contact">

                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Get <span>In touch</span></h2>
                            <h3>I'm always open to discussing product design work or partnership.</h3>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="contact-info">

                                <li><i className="fa fa-map-marker"></i>

                                    <h4>Address:</h4>
                                    <p>1-10-3/A/2, Shahsahab Gutta <br></br>
                                        Mahabubnagar,Telangana.
                        </p>

                                </li>
                                <li><i className="fas fa-envelope"></i>

                                    <h4>Email:</h4>
                                    <p>sabihafarheen256@gmail.com
                        </p>

                                </li>
                                <li><i className="fa fa-phone"></i>

                                    <h4>Phone:</h4>
                                    <p>9603768407
                        </p>

                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </article >
    )
}

export default Contact;