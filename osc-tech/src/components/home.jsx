import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import '../components/home.css'

export default class Home extends Component {

  render () {
    return (
      <div className='home'>
        <div>
          <Button variant="primary" size="lg">
            Large
        </Button>{" "}
          <Button variant="secondary" size="lg">
            Large
        </Button>
        </div>

      </div>
    )
  }
}