import React from 'react';
import Radium from 'radium';

export default class ContextMenuContent extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        console.log(child);
        return React.cloneElement(child, {
          onClick: () => {
            if(child.props.onClick !== 'undefined') child.props.onClick();
            this.props.toggleMenu();
          }
        })
      }
    );


    return(
        <div className="context-menu-content" style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          width: 240,
          backgroundColor: '#f8f8f9',
          boxShadow: '#d0dae0 0px 4px 8px',
          padding: '8px 0',
          overflow: 'hidden'
        }}>
          <div className="context-menu-inside">
            {childrenWithProps}
          </div>
        </div>
    )
  }
}
