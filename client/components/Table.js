import React from 'react';
import Radium from 'radium';

import TableRow from './TableRow';

@Radium
export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 2px 2px #d0dae0',
          borderRadius: '1px',
          overflow: 'hidden'
        }}>
        {(this.props.headers) && (<thead><TableRow header={true} data={this.props.headers} /></thead>)}
        <tbody>{this.props.data.map((row, index) => <TableRow key={index} data={row} />)}</tbody>
      </table>
    )
  }
}
