import React, { Component } from 'react';

export default class Plate extends Component {

  render () {
    return (
      <div>
        <h3>Plate</h3>
        <ul>
          {
            this.props.plate.map((item, idx) => (
              <li key={idx}>
                {item.name}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}