import React from 'react';
import Radium from 'radium';

@Radium
export default class ContextMenuDivider extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <div style={{
        borderTop: '1px solid #d0dae0',
        margin: '8px 0'
      }}>
      </div>
    )
  }
}
