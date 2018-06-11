import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import './CustNavBar.css';

export default class CustNavbar extends Component {
  render() {
    return(
      <div className="navBar">
      <Navbar default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"><span className="said">SAID MAYAN</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <span className="about"><Scrollchor to="#about" className="nav-link">About</Scrollchor></span>
          </NavItem>
          <NavItem eventKey={2}>
            <span className="work"><Scrollchor to="#projects" className="nav-link">Work</Scrollchor></span>
          </NavItem>
          <NavItem eventKey={3}>
            <span className="contact"><Scrollchor to="#contact" className="nav-link">Contact</Scrollchor></span>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}
