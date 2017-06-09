import React from 'react';
import Radium from 'radium';

@Radium
export default class Row extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 -16px'
        }}>

        {this.props.children}
      </div>
    )
  }
}
