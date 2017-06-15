import React from 'react';
import Radium from 'radium';
const files = require.context('../icons', false, /.*\.svg$/);
files.keys().forEach(files);

@Radium
export default class Icon extends React.Component {

  render() {
    return(
      <svg
        className={ `ico ${ this.props.className }` }
        style={this.props.style}
        width={this.props.size}
        height={this.props.size}
        >
        <use
          xlinkHref={ `#${ this.props.type }` }
          style={{fill: this.props.color || 'currentColor'}}></use>
      </svg>
    )
  }
}

Icon.defaultProps = {
  className: '',
  size: '24'
}
