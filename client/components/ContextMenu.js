import React from 'react';
import Radium, { Style } from 'radium';
import { CSSTransitionGroup } from 'react-transition-group';


@Radium
export default class ContextMenu extends React.Component {
  constructor (props) {
    super(props);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.state = {
      showMenu: false
    }
  }

  handleTriggerClick() {
    this.setState({
      showMenu: (this.state.showMenu) ? false : true
    })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if(typeof child.type === 'string') {
          return React.cloneElement(child, {
            onClick: () => {
              if(child.props.onClick !== 'undefined') child.props.onClick();
              this.handleTriggerClick();
            }
          })
        } else if (typeof child.type === 'function') {
          if(child.type.name !== 'undefined') {
            if(child.type.name === 'ContextMenuContent') {
              const el = React.cloneElement(child, { toggleMenu: this.handleTriggerClick });
              return (
                <CSSTransitionGroup
                  transitionName="context-menu"
                  transitionEnterTimeout={400}
                  transitionLeaveTimeout={400}>
                  {
                    (this.state.showMenu) ? el : null
                  }
                </CSSTransitionGroup>
              )
            }
          }
        } else {
          return React.cloneElement(child)
        }

      }
    );

    return (
      <div className="context-menu" style={{position: 'relative'}}>
        <Style scopeSelector='.context-menu' rules={{
          '.context-menu-enter': {
            maxHeight: 0,
            opacity: '0.01',
          },
          '.context-menu-enter.context-menu-enter-active': {
            maxHeight: 500,
            opacity: 1,
            transition: '400ms cubic-bezier(.7,0,.3,1)'
          },
          '.context-menu-leave': {
            maxHeight: 500,
            opacity: 1
          },
          '.context-menu-leave.context-menu-leave-active': {
            maxHeight: 0,
            opacity: '0.01',
            transition: '400ms cubic-bezier(.7,0,.3,1)'
          },

          '.context-menu-enter .context-menu-inside': {
            transform: 'translateY(-16px)',
            opacity: 0
          },
          '.context-menu-enter.context-menu-enter-active .context-menu-inside': {
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'opacity .4s ease,-webkit-transform .4s cubic-bezier(.7,0,.3,1)'
          },
          '.context-menu-leave .context-menu-inside': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '.context-menu-leave.context-menu-leave-active .context-menu-inside': {
            transform: 'translateY(-16px)',
            opacity: 0,
            transition: 'opacity .4s ease,-webkit-transform .4s cubic-bezier(.7,0,.3,1)'
          }
        }} />
        {childrenWithProps}
      </div>
    )
  }
}
