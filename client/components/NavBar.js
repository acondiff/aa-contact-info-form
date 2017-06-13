import React from 'react';
import Radium from 'radium';
import { CSSTransitionGroup } from 'react-transition-group';

import Button from './Button';
import Icon from './Icon';

import aaLogo from "../images/aa-logo.png";

@Radium
export default class NavBar extends React.Component {
  constructor (props) {
    super(props)
  }


  render() {

    const nav = [
      {
        label: 'Plan Travel',
        id: 'planTravel',
        href: '',
        description: 'Taking a trip? We have your travel plans covered.',
        items: [
          {
            label: 'Flights',
            id: 'flights',
            href: ''
          },
          {
            label: 'Hotels',
            id: 'hotels',
            href: ''
          },
          {
            label: 'Cars',
            id: 'cars',
            href: ''
          },
          {
            label: 'Activities',
            id: 'activities',
            href: ''
          },
          {
            label: 'Vacations',
            id: 'vacations',
            href: ''
          },
          {
            label: 'Cruise',
            id: 'cruise',
            href: ''
          },
          {
            label: 'Book with miles',
            id: 'bookWithMiles',
            href: ''
          },
          {
            label: 'Travel deals and offers',
            id: 'travelDeals',
            href: ''
          },
          {
            label: 'Flight schedules and notifications',
            id: 'flightSchedules',
            href: ''
          },
          {
            label: 'Where to fly',
            id: 'whereToFly',
            href: ''
          },
          {
            label: 'Flight status',
            id: 'flightStatus',
            href: ''
          },
          {
            label: 'Online check in',
            id: 'onlineCheckIn',
            href: ''
          },
          {
            label: 'My trips',
            id: 'myTrips',
            href: ''
          },
          {
            label: 'My account',
            id: 'myAccount',
            href: ''
          },
          {
            label: 'Join AAdvantage Loyalty Program',
            id: 'joinAAdvantage',
            href: ''
          }
        ]
      },
      {
        label: 'Travel Information',
        id: 'Travel Information',
        href: '',
        description: 'Taking a vacation? Allow us to simplify your travels.',
        items: [
          {
            label: 'At the airport',
            id: 'atTheAirport',
            href: ''
          },
          {
            label: 'During your flight',
            id: 'duringYourFlight',
            href: ''
          },
          {
            label: 'Mobile and app',
            id: 'mobileAndApp',
            href: ''
          },
          {
            label: 'Planes',
            id: 'planes',
            href: ''
          },
          {
            label: 'Lounges',
            id: 'lounges',
            href: ''
          },
          {
            label: 'Baggage',
            id: 'baggage',
            href: ''
          },
          {
            label: 'International travel',
            id: 'international Travel',
            href: ''
          },
          {
            label: 'Special assistance',
            id: 'specialAssistance',
            href: ''
          },
          {
            label: 'oneworld alliance',
            id: 'oneworldAlliance',
            href: ''
          },
          {
            label: 'Flight status',
            id: 'flightStatus',
            href: ''
          },
          {
            label: 'Online check in',
            id: 'onlineCheckIn',
            href: ''
          },
          {
            label: 'My trips',
            id: 'myTrips',
            href: ''
          },
          {
            label: 'My account',
            id: 'myAccount',
            href: ''
          },
          {
            label: 'Join AAdvantage Loyalty Program',
            id: 'joinAAdvantage',
            href: ''
          }
        ]
      },
      {
        label: 'AAdvantage',
        id: 'AAdvantage',
        href: '',
        description: 'Traveling the world? Our loyalty program can get you there.',
        items: [
          {
            label: 'AAdvantage',
            id: 'AAdvantage',
            href: ''
          },
          {
            label: 'Elite status',
            id: 'eliteStatus',
            href: ''
          },
          {
            label: 'Earn miles',
            id: 'earnMiles',
            href: ''
          },
          {
            label: 'Redeem miles',
            id: 'redeemMiles',
            href: ''
          },
          {
            label: 'Award travel',
            id: 'awardTravel',
            href: ''
          },
          {
            label: 'Buy upgrades',
            id: 'buyUpgrades',
            href: ''
          },
          {
            label: 'Bonus offers',
            id: 'bonusOffers',
            href: ''
          },
          {
            label: 'Buy & Share Miles',
            id: 'buyShareMiles',
            href: ''
          },
          {
            label: 'AAdvantage credit cards',
            id: 'AAdvantageCreditCards',
            href: ''
          },
          {
            label: 'Flight status',
            id: 'flightStatus',
            href: ''
          },
          {
            label: 'Online check in',
            id: 'onlineCheckIn',
            href: ''
          },
          {
            label: 'My trips',
            id: 'myTrips',
            href: ''
          },
          {
            label: 'My account',
            id: 'myAccount',
            href: ''
          },
          {
            label: 'Join AAdvantage Loyalty Program',
            id: 'joinAAdvantage',
            href: ''
          }
        ]
      }
    ];

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

    let hoveringSubmenu = () => {
      let isHovering = false;
      for(let i in nav) {
        let item = nav[i];
        if(Radium.getState(this.state, item.id, ':hover') || Radium.getState(this.state, item.id+'Menu', ':hover')) {
          isHovering = true;
        }
      }
      return isHovering;
    };

    return(
      <header style={{
        backgroundColor: hoveringSubmenu() ? 'rgba(255,255,255,0.25)' : 'white',
        width: '100%',
        height: '165px',
        boxShadow: hoveringSubmenu() ? '0 1px 1px rgba(208, 218, 224, .5)' : '0 2px 2px #d0dae0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: '250ms'
      }}>
        <div style={{
          height: 36,
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            right: 0,
            left: 0,
            zIndex: 5,
            backgroundColor: 'white',
            minHeight: hoveringSubmenu() ? 165 : 0,
            boxShadow: hoveringSubmenu() ? '0 2px 2px #d0dae0' : null,
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
                backgroundColor: 'white'
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  flex: 1
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
                  margin: 0
                }}>
                  <li style={navLiStyles}><a ref="language" style={navLinkStyles} href="#">English</a></li>
                  <li style={navLiStyles}><a ref="login" style={navLinkStyles} href="#">Login</a></li>
                  <li style={navLiStyles}><a ref="apps" style={navLinkStyles}><Icon type="apps" size="12px" style={{ transform: 'scale(1.75) translateY(1px)' }} /></a></li>
                  <li style={navLiStyles}><a ref="help" style={navLinkStyles}><Icon type="help-outline" size="12px" style={{ transform: 'scale(1.75) translateY(1px)' }} /></a></li>
                  <li style={navLiStyles}><a ref="search" style={navLinkStyles}><Icon type="search" size="12px" style={{ transform: 'scale(1.75) translateY(1px)' }} /></a></li>
                </ul>
              </nav>
              <div style={{
                marginTop: hoveringSubmenu() ? 0 : '-165px',
                minHeight: 165 - 36,
                transition: '250ms'
              }}>
                    {nav.map((item, index) => (
                <CSSTransitionGroup
                  transitionName="nav-submenu"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={125}
                  transitionLeaveTimeout={125} style={{display: 'block', width: '100%'}}>
                      {(Radium.getState(this.state, item.id, ':hover') || Radium.getState(this.state, item.id + 'Menu', ':hover')) ? (
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
                      ) : null}
                </CSSTransitionGroup>
                    ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{
          flex: 1,
          width: '100%'
        }}>
          <CSSTransitionGroup
            transitionName="nav-heading"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
            style={Object.assign(centerWrap, { display:'flex' })}>
          {!hoveringSubmenu() ? (
            <div style={{
                display: 'flex',
                flex: 1
            }}>
              <div style={{
                display: 'flex',
                width: '60%',
                alignItems: 'center',
                flex: 1
              }}>
                <div style={{
                  display: 'inline-block',
                  width: 45,
                  height: 40,
                  paddingRight: 24,
                  marginRight: 24,
                  boxSizing: 'content-box',
                  borderRight: '1px solid #d0dae0',
                  overflow: 'hidden',
                  transition: '.25s',
                  position: 'relative',
                  ':hover': {
                    width: 264
                  }
                }}>
                  <img
                    src={aaLogo}
                    style={{
                      height: 40,
                      position: 'absolute',
                      top: 0,
                      right: 24
                    }} />
                </div>
                <h1 style={{
                  margin: 0,
                  display: 'inline-block',
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
