import React from 'react';
import Radium, { Style } from 'radium';
import { CSSTransitionGroup } from 'react-transition-group';

import Button from './Button';
import Icon from './Icon';
import ContextMenu from './ContextMenu';
import ContextMenuContent from './ContextMenuContent';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuDivider from './ContextMenuDivider';

import aaLogo from "../images/aa-logo.png";

import nav from '../data/nav';

@Radium
export default class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      submenu: null,
      scrollTop: 0,
      navPosition: 'absolute',
      navTop: 0,
      scrollingDown: true,
      navCondensed: false,
      scrollNoAnimate: true
    }
    this.showSubmenu = this.showSubmenu.bind(this);
    this.showSubmenuWrap = this.showSubmenuWrap.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60),
        scrollingDown = (this.state.scrollTop < scrollTop) ? true : false;

    if(!scrollingDown && this.state.scrollingDown || scrollingDown && !this.state.scrollingDown) {
      console.log(scrollTop);
    }

    if(scrollTop > 35 && scrollingDown) {
      this.setState({
        navPosition: 'fixed',
        navTop: -35,
        navCondensed: true
      });
    } else if(scrollTop > 35 && !scrollingDown) {
      this.setState({
        navPosition: 'fixed',
        navTop: 0,
        navCondensed: false
      });
    } else if (scrollTop <= 35 && this.state.navCondensed) {
      this.setState({
        navPosition: 'fixed',
        navTop: 0,
        navCondensed: false
      });
    } else if(scrollTop <= 35 && !this.state.navCondensed && !scrollingDown) {
      if(scrollTop === 0) {
        this.setState({
          navPosition: 'absolute',
          navTop: 0,
          navCondensed: false
        });
      } else {
        this.setState({
          navPosition: 'fixed',
          navTop: 0,
          navCondensed: false
        });
      }
    }

    if(this.state.scrollTop === 0) {
      this.setState({
        scrollNoAnimate: true
      });
    } else if (this.state.scrollTop > 35 && this.state.scrollNoAnimate) {
      this.setState({
        scrollNoAnimate: false
      });
    }

    this.setState({
      scrollTop,
      scrollingDown
    }, (newVal, oldVal) => {

    });
  }

  showSubmenu(name) {
    this.setState({
      submenu: (name === this.state.submenu) ? null : name
    });
  }

  showSubmenuWrap() {
    let isHoveringMenu = false;
    for(let i in nav) {
      let item = nav[i];
      if(Radium.getState(this.state, item.id, ':hover') || Radium.getState(this.state, item.id+'Menu', ':hover')) {
        isHoveringMenu = true;
      }
    }
    return (isHoveringMenu || this.state.submenu);
  }

  render() {

    const navLiStyles = {
      display: 'inline-block'
    }
    const navLinkStyles = {
      display: 'inline-block',
      padding: '20px 16px 0 16px',
      textDecoration: 'none',
      color: '#36495a',
      textTransform: 'uppercase',
      fontSize: 12,
      fontWeight: 'bold',
      transition: '.2s',
      ':hover': {
        color: '#0078d2'
      }
    }
    const subnavLinkStyles = {
      display: 'inline-block',
      width: '100%',
      padding: '8px 8px',
      textDecoration: 'none',
      color: '#36495a',
      fontSize: 12,
      fontWeight: '500',
      transition: '.2s',
      ':hover': {
        color: '#0078d2',
        backgroundColor: '#f8f8f9'
      }
    }
    const centerWrap = {
      margin: '0 auto',
      padding: '0 15px',
      width: '100%',
      height: '100%',
      maxWidth: '1200px'
    }

    return(
      <header style={{
        backgroundColor: this.showSubmenuWrap() ? 'rgba(255,255,255,0.25)' : 'white',
        width: '100%',
        height: this.state.navCondensed ? '115px' : '165px',
        boxShadow: this.showSubmenuWrap() ? '0 1px 1px rgba(208, 218, 224, .5)' : '0 2px 2px #d0dae0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: this.state.navPosition,
        top: this.state.navTop,
        left: 0,
        zIndex: 100,
        transition: (this.state.scrollNoAnimate && this.state.scrollingDown) ?
          'top 0ms, background-color 250ms, height 250ms, box-shadow 250ms' : '250ms'
      }}>
        <Style rules={{ 'body': {paddingTop: 165}}} />
        <div style={{
          height: 35,
          minHeight: 35,
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            right: 0,
            left: 0,
            zIndex: 5,
            backgroundColor: 'white',
            minHeight: this.showSubmenuWrap() ? 165 : 0,
            boxShadow: this.showSubmenuWrap() ? '0 2px 2px #d0dae0' : null,
            transition: '250ms'
          }}>
            <div style={[centerWrap, {
              display: 'flex',
              flexDirection: 'column'
            }]}>
              <nav style={{
                marginRight: '-16px',
                marginLeft: '-16px',
                display: 'flex',
                zIndex: 10,
                backgroundColor: 'white',
                height: 35
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  flex: '1',
                  opacity: this.state.navCondensed ? 0 : 1,
                  transition: '250ms'
                }}>
                  {nav.map((item, index) => (
                    <li key={item.id} style={{display: 'inline-block'}}>
                      <a ref={item.id} style={{
                        display: 'inline-block',
                        padding: '20px 16px 0 16px',
                        textDecoration: 'none',
                        color: (Radium.getState(this.state, item.id + 'Menu', ':hover')) ?'#0078d2':'#36495a',
                        textTransform: 'uppercase',
                        fontSize: 12,
                        fontWeight: 'bold',
                        transition: '.2s',
                        ':hover': {
                          color: '#0078d2'
                        }
                      }} href="#">{item.label}</a>
                    </li>
                  ))}
                </ul>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  opacity: this.state.navCondensed ? 0 : 1,
                  transition: '250ms'
                }}>
                  <li style={navLiStyles}>
                    <a ref="language" style={navLinkStyles} href="#">English</a>
                  </li>
                  <li style={navLiStyles}>
                    <a ref="login" style={navLinkStyles} href="#">Login</a>
                  </li>
                  <li style={navLiStyles}>
                    <ContextMenu>
                      <a ref="apps" style={navLinkStyles} onClick={() => {}}>
                        <Icon type="apps" size="12px" style={{ transform: 'scale(1.75) translateY(1px)' }} />
                      </a>
                      <ContextMenuContent>
                        <ContextMenuItem
                          disabled={false}
                          label="Search"
                          icon="search"
                          onClick={() => this.showSubmenu('search')} />
                        <ContextMenuItem
                          disabled={false}
                          label="Find a flight"
                          icon="flight"
                          onClick={() => this.showSubmenu('search')} />
                        <ContextMenuItem
                          disabled={false}
                          label="Find a rental"
                          icon="car"
                          onClick={() => this.showSubmenu('search')} />
                        <ContextMenuItem
                          disabled={false}
                          label="Find a hotel"
                          icon="hotel"
                          onClick={() => this.showSubmenu('search')} />
                        <ContextMenuDivider />
                        <ContextMenuItem
                          disabled={false}
                          label="Get Help"
                          icon="help-outline"
                          onClick={() => this.showSubmenu('search')} />
                        <ContextMenuItem
                          disabled={false}
                          label="Chat with us"
                          icon="question-answer"
                          onClick={() => this.showSubmenu('search')} />
                      </ContextMenuContent>
                    </ContextMenu>
                  </li>
                  <li style={navLiStyles}>
                    <a ref="help" style={navLinkStyles} onClick={() => this.showSubmenu('help')}>
                      <Icon type="help-outline" size="12px" style={{ transform: 'scale(1.75) translateY(1px)' }} />
                    </a>
                  </li>
                  <li style={navLiStyles}>
                    <a
                      ref="search"
                      style={[navLinkStyles, {
                        color: this.state.submenu === 'search' && '#0078d2'
                      }]}
                      onClick={() => this.showSubmenu('search')}>
                      <Icon type="search" size="12px" style={{ transform: 'scale(1.75) translateY(1px)' }} />
                    </a>
                  </li>
                </ul>
              </nav>
              <div style={{
                marginTop: this.showSubmenuWrap() ? 0 : '-165px',
                minHeight: 165 - 36,
                transition: '250ms'
              }}>
                  <CSSTransitionGroup
                    transitionName="nav-submenu"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={125}
                    transitionLeaveTimeout={125} style={{display: 'block', width: '100%'}}>
                    {nav.map((item, index) => {
                      return (Radium.getState(this.state, item.id, ':hover') || Radium.getState(this.state, item.id + 'Menu', ':hover')) ? (
                        <div ref={item.id + 'Menu'} className="nav-submenu" style={{
                          width: '100%',
                          display: 'flex',
                          ':hover': {}
                        }}>
                          <div style={{
                            width: '16.66%',
                            margin: '24px 24px 24px 0',
                            paddingRight: 24,
                            borderRight: '1px solid #d0dae0',
                            fontSize: 20,
                            lineHeight: '26px',
                            fontWeight: '300'
                          }}>{item.description}</div>
                          <ul style={{
                            listStyle: 'none',
                            margin: 0,
                            padding: '16px 0',
                            flex: '1'
                          }}>
                            {item.items.map((subitem, index) => (
                              <li key={item.id + '-' + subitem.id} style={[navLiStyles, {width: '20%'}]}><a ref={item.id + '-' + subitem.id} style={subnavLinkStyles} href="#">{subitem.label}</a></li>
                            ))}
                          </ul>
                        </div>
                      ) : null;
                  })}
                  {this.state.submenu === 'search' && (
                    <div ref={'searchMenu'} className="nav-submenu" style={{
                      width: '100%',
                      display: 'flex',
                      ':hover': {}
                    }}>
                      <div style={{
                        position: 'relative',
                        display: 'flex',
                        width: '100%'
                      }}>
                        <div style={{
                          paddingRight: 24,
                          marginTop: 40,
                          marginBottom: 40,
                          display: 'flex',
                          alignItems: 'center',
                          boxSizing: 'content-box',
                          borderRight: '1px solid #d0dae0'
                        }}>
                          <Icon type="search" size="40px" color="#627f90" />
                        </div>
                        <Style scopeSelector='*' rules={{
                            '::-webkit-input-placeholder': {
                                color: '#cad3d9'
                            },
                            ':-moz-placeholder': {
                                color: '#cad3d9'
                            },
                           '::-moz-placeholder': {
                                color: '#cad3d9'
                            },
                            ':-ms-input-placeholder': {
                                color: '#cad3d9'
                            }
                        }} />
                        <input
                          type="text"
                          placeholder="Search AA.com, find flights, or get help..."
                          style={{
                            padding: '40px 32px 40px 32px',
                            fontSize: 32,
                            boxShadow: '0 0 0 transparent',
                            backgroundColor: 'transparent',
                            lineHeight: '44px',
                            margin: 0,
                            fontFamily: '"AmericanSans", sans-serif',
                            fontWeight: 300,
                            color: '#36495a'
                          }} />
                          <div style={{
                            paddingLeft: 24,
                            marginTop: 40,
                            marginBottom: 40,
                            display: 'flex',
                            alignItems: 'center',
                            boxSizing: 'content-box',
                          }} onClick={() => this.showSubmenu('search')}>
                            <Icon type="close" size="40px" color="#627f90" />
                          </div>
                      </div>
                    </div>
                  )}
                  </CSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          flex: '1',
          width: '100%',
          height: 'auto'
        }}>
          <CSSTransitionGroup
            transitionName="nav-heading"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
            style={Object.assign(centerWrap, { display:'flex' })}>
          {!this.showSubmenuWrap() ? (
            <div style={{
                display: 'flex',
                flex: '1'
            }}>
              <div style={{
                display: 'flex',
                width: '60%',
                alignItems: 'center',
                flex: '1'
              }}>
                <div style={{
                  display: 'inline-block',
                  width: this.state.navCondensed ? 36 : 45,
                  height: this.state.navCondensed ? 32 : 40,
                  paddingRight: 24,
                  marginRight: 24,
                  boxSizing: 'content-box',
                  borderRight: '1px solid #d0dae0',
                  overflow: 'hidden',
                  transition: '.25s',
                  position: 'relative',
                  ':hover': {
                    width: this.state.navCondensed ? 208 : 264
                  }
                }}>
                  <img
                    src={aaLogo}
                    style={{
                      height: this.state.navCondensed ? 32 : 40,
                      position: 'absolute',
                      top: 0,
                      right: 24,
                      transition: '.25s'
                    }} />
                </div>
                <h1 style={{
                  margin: 0,
                  display: 'inline-block',
                  fontSize: this.state.navCondensed ? '24px' : '32px',
                  lineHeight: this.state.navCondensed ? '32px' : '44px',
                  transition: '250ms'
                }}>Contact Information</h1>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <Button value="Right Button" position="right" />
              </div>
            </div>
          ) : ''}
          </CSSTransitionGroup>
        </div>
      </header>
    )
  }
}
