import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Home from "./components/home";
import Students from "./components/students"
import Teachers from "./components/teachers"
// import HomeNavbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App () {
  return (
    <div>
      <Router>
        <header>
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>OSC TECH</Navbar.Brand>
              <Nav className="mr-auto">
                <NavLink to="/" exact style={{ textDecoration: 'inherit', color: 'lightgrey', margin: '2%' }} activeStyle={{ color: 'red' }} >Home</NavLink>
                <NavLink to="/Students" exact style={{ textDecoration: 'none', color: 'lightgrey', margin: '2%' }} activeStyle={{ color: 'red' }}>Students</NavLink>
                <NavLink to="/Teachers" exact style={{ textDecoration: 'none', color: 'lightgrey', margin: '2%' }} activeStyle={{ color: 'red' }}>Teachers</NavLink>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
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
              <Route exact path="/teachers">
                <Teachers />
              </Route>
            </Switch>
          </div>
        </header>
      </Router>
      {/* <Router>
        <Route exact path="/" component={Home} />
        <Route exact path='/Students' component={Students} />
      </Router> */}
      {/* <div>
        
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/students">About</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Students">
            <Students />
          </Route>
        </Switch>
      </div> */}
    </div>

  );
}


