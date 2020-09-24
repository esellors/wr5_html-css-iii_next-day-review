import React from 'react';
import './reset.css';
import './App.css';

export default class App extends React.Component {
  render() {
    // Creating some empty divs quickly instead of typing a million div tags
    const bigBoxes = Array.from({ length: 4 }).map(() => (
      <div className="box"></div>
    ));
    const medBoxes = Array.from({ length: 16 }).map(() => (
      <div className="box"></div>
    ));
    const smallBoxes = Array.from({ length: 32 }).map(() => (
      <div className="box"></div>
    ));

    return (
      <div className="all-boxes-container">
        <div className="container big-boxes-container">{bigBoxes}</div>
        <div className="container med-boxes-container">{medBoxes}</div>
        <div className="container small-boxes-container">{smallBoxes}</div>
      </div>
    );
  }
}
