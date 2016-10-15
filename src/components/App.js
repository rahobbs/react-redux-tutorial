import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render () {
    return (
      <div>
        <h1>My Plate App</h1>
        <ul>
          {/* todo: there should be two links here, one to your menu and one to your plate*/}
          <p><Link to='/menu'>Menu</Link></p>
          <p><Link to='/plate'>Plate</Link></p>
        </ul>
        <div>
            {/*NOTE this.props.children goes here because this is what changes based on which route we're using*/}
            {this.props.children}
           {/* todo: this is where either menu or plate should render, depending on the url*/}
        </div>
      </div>
    );
  }
}
