import React, { Component } from 'react';

export default class Menu extends Component {

  render () {
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {
            this.props.menu.map((item, idx) => (
              <li key={idx}>
                <button onClick={()=>this.props.addToPlate(item)}>Add {item.name} to plate</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
