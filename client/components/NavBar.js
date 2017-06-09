import React from 'react';
import Radium from 'radium';

import aaLogo from "../images/aa-logo.png";

@Radium
export default class NavBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const navLiStyles = {
      display: 'inline-block'
    }
    const navLinkStyles = {
      padding: '16px',
      textDecoration: 'none',
      color: 'black',
      textTransform: 'uppercase',
      fontSize: 13,
      fontWeight: 'bold',
      transition: '.2s',
      ':hover': {
        color: '#0078d2'
      }
    }
    return(
      <nav style={{
        backgroundColor: 'white',
        width: '100%',
        height: '165px',
        boxShadow: '0 2px 2px #d0dae0',
        alignItems: 'center',
        display: 'flex'
      }}>
        <div style={{
          margin: '0 auto',
          padding: 15,
          width: '100%',
          maxWidth: '1200px',
          display: 'flex'
        }}>
          <div style={{
            display: 'flex',
            width: '60%',
            alignItems: 'center'
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
            }}
            >
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
            flex: 1
          }}>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                textAlign: 'right'
            }}>
              <li style={navLiStyles}><a ref="plantravel" style={navLinkStyles} href="#">Plan Travel</a></li>
              <li style={navLiStyles}><a ref="travelinfo" style={navLinkStyles} href="#">Travel Info</a></li>
              <li style={navLiStyles}><a ref="aadvantage" style={navLinkStyles} href="#">AAdvantage</a></li>
              <li style={navLiStyles}><a ref="oneworld" style={navLinkStyles} href="#">Oneworld</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
