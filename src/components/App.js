import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {

  render () {
    return (
      <div>
        <h1>My Plate</h1>
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/plate">Plate</Link></li>
        </ul>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
