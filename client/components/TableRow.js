import React from 'react';
import Radium from 'radium';

import TableCell from './TableCell';

@Radium
export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        {this.props.data.map((cell, index) => <TableCell key={index} header={this.props.header} data={cell} />)}
      </tr>
    )
  }
}
