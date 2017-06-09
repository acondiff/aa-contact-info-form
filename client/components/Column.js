import React from 'react';
import Radium from 'radium';

@Radium
export default class Column extends React.Component {
  render() {
    return (
      <div
        style={{
          width: (this.props.span) ? ((parseInt(this.props.span)/12)*100 + '%') : '100%',
          padding: '0 16px'
        }}>
        {this.props.children}
      </div>
    )
  }
}
