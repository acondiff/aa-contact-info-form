import React from 'react';

import Input from './Input';
import NavBar from './NavBar';
import Content from './Content';

import {nameTitles, nameSuffixes, usStates} from '../data';


export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <NavBar />
        <Content/>
      </div>
    )
  }
}
