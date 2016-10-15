import React, { Component } from 'react';

//todo: render a list items that have been added to your plate

export default class Plate extends Component {

  render () {
    console.log(this.props);
    return (
      <div>
        <h3>Plate</h3>
        <ul>
          {/*TODO how to get plate items here?*/}
          {this.props.plate.map(function(item, index){
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </div>
    );
  }
}
