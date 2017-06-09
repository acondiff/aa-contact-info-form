import React from 'react';
import Radium from 'radium';

@Radium
export default class Button extends React.Component {
  render() {
    return (
      <input
        type={(this.props.submit) ? 'submit' : 'button'}
        value={this.props.value}
        style={{
          margin: '4px',
          display: 'inline-block',
          fontSize: this.props.size === 'large' ? '15px' : '12px',
          padding: this.props.size === 'large' ? '16px 32px' : '12px 16px',
          backgroundColor: (this.props.type === 'primary') ? '#0078d2' : (this.props.type === 'danger') ? '#d32027' : '#627f90',
          color: 'white',
          border: 0,
          borderRadius: 2,
          textTransform: 'uppercase',
          letterSpacing: '.25px'
        }}>
        {this.props.children}
      </input>
    )
  }
}
