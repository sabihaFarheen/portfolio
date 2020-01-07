import React from 'react';
import './image.css';
import Bicycle from './Bicycle/bicycle';
import Clock from './Clock/clock';


function Portfolio(){
    return(
        <article id="portfolio">
            <div className="container">
            <div className="portfolio">
            <div className="row">
                        <div className="col-lg-12">
                            <h2>My <span>Portfolio</span></h2>
                            <h3>A few recent design and coding projects.want to see more? Email me.</h3>
                            

                        </div>
                        </div>
            </div>
                <div className="row">
                    
                    <div className="col-lg-6">
                       <div className="port-bic">
                       <Bicycle />
                       </div>
                    </div>

                    <div className="col-lg-6">
                       <div className="port-clk">
                       <Clock />
                       </div>
                    </div>
                    
                    </div>
                </div>
            
        </article>
    )
}

export default Portfolio;