import React from 'react';
import Radium from 'radium';

@Radium
export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <td style={{
        fontWeight: (this.props.header === true) ? 'bold' : null,
        backgroundColor: 'white',
        padding: 16,
        borderBottom: '1px solid #d0dae0'
      }}>
        {this.props.data}
      </td>
    )
  }
}
