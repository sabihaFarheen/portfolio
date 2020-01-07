import React from 'react';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './custom.js';
import './App.css';
import Header from './Header/header';
import Home from './Main/banner';
import About from './Main/about';
import Portfolio from './Portfolio/portfolio';
import Contact from './Main/contact';

import Skills from './Main/resume';


function App() {
 
  return (
    <div>
      <div className="preload">
      <img src="https://freepreloaders.com/wp-content/uploads/2019/05/index.bouncing-circle-loading-icon.svg" alt="pic" />
      </div>
      <div className="content">
      <section id="background">
        <Header />
        <Home />
      </section>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
     
      </div>
      
    </div>
  );
}

export default App;
