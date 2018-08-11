import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import CustNavbar from './components/CustNavbar.jsx';
import CarouselCA4LC from './components/CarouselCA4LC.jsx';
import CarouselCrudye from './components/CarouselCrudye.jsx';
import CarouselNudistguise from './components/CarouselNudistguise.jsx';
import { ScrollApp } from './components/ScrollButton.jsx';

class App extends Component {

  render() {

    return (
      <Router>
      <div className="App">
        <CustNavbar />
        <ScrollApp />
        <Route exact path="/" component={Home} />


        <div id="about">
          <div className="about-1">
            <h2 className="about-title">ABOUT</h2>
            <br/>
            <h3 className="set">Hi, I’m Said. I was an editor in branded content, and a production manager in a design studio before learning to code. Now I spend my days mulling over design, performance and architecture. I have experience in building front-end/back-end applications and visualizing the most effective way (or least obstructive way I should say) of hosting/presenting content. The affinity between design and code is what drives me, along with a monastic curiosity in converting complex problems into simple solutions…</h3>
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
               <CarouselCA4LC />
                <h3 className="set">CATCH A FOUR LEAF CLOVER</h3>
                <h4 className="set">A single player game where the objective of the game is to net (by clicking) as many windswept Four-Leaf Clovers as you can within a minute’s time. The more clovers you’re able to net, the better your luck. Level of difficulty is raised with strong wind-speeds and clovers that are hard to click on. Design and architectural (Modernist) backdrops serve as a theme throughout the app, as he/she try to navigate the elements…<br/><br/>Technologies/Languages: HTML, CSS, Javascript, JQuery</h4>
                <a className="set" href="https://github.com/SaidMayan/catch-a-four-leaf-clover-Said" target="_blank">See In Github</a>
                <a className="set-link" href="https://catch-a-four-leaf-clover.herokuapp.com" target="_blank">See Live</a>
                <br />
                <br />
                <br />
              </div>
              <div class="project-info">
              <CarouselCrudye />
                <h3 className="set">CRUDYE</h3>
                <h4 className="set">A fun-themed CRUD app where users get to navigate four different Kanye (West) types: Old Kanye, Straight-from-the-Go Kanye, So-Kanye (Kanye West storming the VMA stage) and New Kanye… Each Kanye Type has a set of instances that include a photo and context to that particular instance, “Kanye did what?!”… Users are able to utilize full CRUD functionality on any instances they have created.<br /><br/>Technologies/Languages: CSS, Javascript, JQuery, Node.js/Express, PostgreSQL, Bcrypt, JWT, Heroku</h4>
                <a className="set" href="https://github.com/SaidMayan/crudYe-Said" target="_blank">See In Github</a>
                <a className="set-link" href="https://crudye.herokuapp.com" target="_blank">See Live</a>
              </div>
              <div class="project-info">
                <h3 className="set">FOODFAV</h3>
                <h4 className="set">A restaurant review app utilizing Yelp’s API to fetch a list of restaurants (client-side rendering) based on a user’s location and preferred cuisine types. After searching restaurants, you’re able to review them yourself and leave notes for future references. Full CRUD functionality on reviewing restaurants. Peer programmed with three other members through one git repository and separated each task amongst team members.<br /><br/>Technologies/Languages: React, Yelp API, CSS, Javascript, Node.js/Express, PostgreSQL, Bcrypt, JWT, Heroku</h4>
                <a className="set" href="https://github.com/SaidMayan" target="_blank">See In Github</a>
                <a className="set-link" href="https://food-fav.herokuapp.com" target="_blank">See Live</a>
              </div>
              <div class="project-info">
              <CarouselNudistguise />
                <h3 className="set">NUDISTGUISE</h3>
                <h4 className="set">An e-commerce site offering a selection of niched menswear and random goods. Users are able to navigate through all products, products by category and a blog (WIP). Design borrows it style from Tres-Bien (menswear) Shop. Post MVP is to add a fully-function payment option/service, potentially Stripe API.<br /><br/>Technologies/Languages: React, CSS, Javascript, Node.js/Express, PostgreSQL, Bcrypt, JWT, Heroku</h4>
                <a className="set" href="https://github.com/SaidMayan/e-commerce-nudistguise" target="_blank">See In Github</a>
                <a className="set-link" href="https://nudistguise.herokuapp.com" target="_blank">See Live</a>
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
