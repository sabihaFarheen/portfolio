import React from 'react';

function Clock() {
    return (
        <section id="clock">
            <div className="d-table">
                <div className="d-table-row">
                    <div className="d-table-cell">
                        <section className="clock">
                            <div className="clock-border">
                            <div id ="secs-pointer" className="sec d-inlineblock"></div>
                            <div id ="mins-pointer" className="min d-inlineblock"></div>
                            <div id ="hours-pointer" className="hour d-inlineblock"></div>
                            <div className="clockcenter d-inlineblock"></div>
                            <div className="one">1</div>
                            <div className="two">2</div>
                            <div className="three">3</div>
                            <div className="four">4</div>
                            <div className="five">5</div>
                            <div className="six">6</div>
                            <div className="seven">7</div>
                            <div className="eight">8</div>
                            <div className="nine">9</div>
                            <div className="ten">10</div>
                            <div className="eleven">11</div>
                            <div className="twelve">12</div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Clock;