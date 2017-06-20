import React from 'react';
import Radium from 'radium';
import ContactInfo from './ContactInfo'


@Radium
export default class Content extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <div style={{
        margin: '30px auto',
        padding: '16px 32px',
        width: '100%',
        maxWidth: '1264px'
      }}>
        <ContactInfo />
      </div>
    )
  }
}
