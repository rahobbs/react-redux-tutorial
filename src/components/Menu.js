import React, { Component } from 'react';

//todo: render a list of menu items + buttons to add them to your plate

export default class Menu extends Component {

  render () {
    return (
      <div>
        <h3>Menu</h3>
        <ul>
          {/*NOTE how we used idx here*/}
          {/*NOTE onClick must take a function that calls this.props.whateverActionCreator*/}
        {this.props.menu.map((item, index) =>(
           <li key={index}><button onClick={() => this.props.addToPlate(item)}>{item.name}</button></li>
          ))
        }
        </ul>
      </div>
    );
  }
}
