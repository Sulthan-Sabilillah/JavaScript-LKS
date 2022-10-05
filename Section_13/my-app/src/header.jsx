import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Profile from "./components/profile";
import App from "./App";

export default class header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Hehee123</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">Contact Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/blog">Blog</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile">Profile</Link>
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Routes>
      </Router>
    );
  }
}
