import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import CustNavbar from './components/CustNavbar.jsx';

class App extends Component {

  render() {

    return (
      <Router>
      <div className="App">
        <CustNavbar />
        <Route exact path="/" component={Home} />


        <div id="about">
          <div className="about-1">
            <h2 className="about-title">ABOUT</h2>
            <br/>
            <h3 className="set">Hi, I’m Said. I was a copywriter (in branded content), and a production manager in a design studio before learning to code. Now I spend my days obsessing over design, performance and architecture. I have experience in building front-end/back-end applications and visualizing the most effective way (or least obstructive way I should say) of hosting/presenting content. The affinity between design and code is what drives me, along with a monastic curiosity in converting complex problems into simple solutions…</h3>
          </div>
        </div>

        <div className="skills">
          <h2 className="skills-title">SKILLS</h2>
          <br/>
          <h3 className="set">React, Node.js/Express, Javascript (ES6), HTML5, CSS3, Postgresql, JQuery, Ruby On Rails, Git, Github, Heroku, Responsive Design...</h3>
        </div>

        <div id="projects">
          <h2>WORK</h2>
          <br/>
              <div class="project-info">
                <iframe src="https://giphy.com/embed/1BffSQTqjoTDqepjwI" width="480" height="246" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className="set">CATCH A FOUR LEAF CLOVER</h3>
                <h4 className="set">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                <a className="set" href="https://github.com/SaidMayan/catch-a-four-leaf-clover-Said" target="_blank">See In Github</a>
                <br />
                <br />
                <br />
              </div>
              <div class="project-info">
              <iframe src="https://giphy.com/embed/wsZaPHeKcVToXsAJf1" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className="set">CRUDYE</h3>
                <h4 className="set">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                <a className="set" href="https://github.com/SaidMayan/crudYe-Said" target="_blank">See In Github</a>
              </div>
              <div class="project-info">
                <h3 className="set">FOODFAV</h3>
                <h4 className="set">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                <a className="set" href="https://github.com/SaidMayan" target="_blank">See In Github</a>
              </div>
              <div class="project-info">
                <h3 className="set">NUDISTGUISE</h3>
                <h4 className="set">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                <a className="set" href="https://github.com/SaidMayan/e-commerce-nudistguise" target="_blank">See In Github</a>
              </div>
        </div>

        <div id="contact">
          <br/>
          <br/>
          <div className="i-center">
            <a target="_blank" href="https://github.com/SaidMayan"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/said-mayan/"><i class="fab fa-linkedin"></i></a>
            <a target="_blank" href="mailto:kasemayan@gmail.com"><i class="fas fa-envelope"></i></a>
          </div>
          <br/>
          <br/>
        </div>
          <div>
            <h4 className="footer">Designed and kept minimal by Said Mayan</h4>
          </div>
          <br/>
      </div>
      </Router>
    );
  }
}

export default App;
