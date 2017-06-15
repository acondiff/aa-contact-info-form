import React from 'react';
import Radium from 'radium';

import Icon from './Icon';

@Radium
export default class ContextMenuItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <div onClick={this.props.onClick} style={{
        padding: '8px 16px',
        lineHeight: '20px',
        transition: '250ms',
        ':hover': {
          color: '#0078d2'
        }
      }}>
        <Icon
          type={this.props.icon}
          size="20px"
          style={{
            verticalAlign: 'middle',
            marginRight: 16
          }} />
        {this.props.label}
      </div>
    )
  }
}
