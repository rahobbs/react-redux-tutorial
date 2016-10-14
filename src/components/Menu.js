import React, { Component } from 'react';

//todo: render a list of menu items + buttons to add them to your plate

export default class Menu extends Component {

  render () {
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          <li>
            <button>There should be some menu items here</button>
          </li>
           <li>
            <button>There's some dummy data you can put on the state in items.js</button>
          </li>
        </ul>
      </div>
    );
  }
}
