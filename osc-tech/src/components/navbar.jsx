import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "../components/students";
import Home from "./students";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand Link to="/Home">
              OSC TECH
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/Students">Students</Nav.Link>
              <Nav.Link href="#teachers">Teachers</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Students">
              <Students />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
