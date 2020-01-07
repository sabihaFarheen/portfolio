import React from 'react';

function Header() {
    return (
        <header id="header">

            <div className="dropdown">
                <button className="btn" type="button" data-toggle="dropdown">
                    <i className="fa fa-bars" aria-hidden="true"></i></button>

                <div className="menu-link">
                    <ul className="dropdown-menu">
                        <li>

                            <a href="#header" className="menu-link1 ">

                                <i className="fa fa-home active"></i>
                                <span id="dis-span1">Home</span>

                            </a>
                        </li>
                        <li>

                            <a href="#about" className="menu-link2">

                                <i className="fa fa-user-secret"></i>
                                <span id="dis-span2">About</span>

                            </a>
                        </li>
                        <li>

                            <a href="#skills" className="menu-link3">

                                <i className="fa fa-sliders"></i>
                                <span id="dis-span3">Skills</span>

                            </a>
                        </li>

                        <li>

                            <a href="#portfolio" className="menu-link5">

                                <i className="fa fa-picture-o"></i>
                                <span id="dis-span5">Portolio</span>

                            </a>
                        </li>
                        <li>

                            <a href="#contact" className="menu-link6">

                                <i className="fa fa-volume-control-phone"></i>
                                <span id="dis-span6">Contact</span>

                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </header>
    )
}

export default Header;