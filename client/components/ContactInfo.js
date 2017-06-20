import React from 'react';

import Input from './Input';
import Table from './Table';
import Row from './Row';
import Column from './Column';
import Button from './Button';
import Icon from './Icon';

import {nameTitles, nameSuffixes, usStates, seatClasses} from '../data';


export default class ContactInfo extends React.Component {

  constructor() {
    super();
    this.state = {
     contact: {
        title: '',
        fname: '',
        lname: '',
        suffix: '',
        city: '',
        state: '',
        postalcode: '',
        comments: '',
        seatclass: '',
        flightdate: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleInputChange(event) {
    if(typeof event._d !== 'undefined') {
      const value = event._d;
      this.setState({
        contact: Object.assign({}, this.state.contact, { bday: value })
      })
    } else {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        contact: Object.assign({}, this.state.contact, { [name]: value })
      });
    }
  }

  render() {

    const passengerTableHeaders = [
      'Class',
      'Seat count',
      'Seat pitch',
      'Seat width',
      'Wi-Fi',
      'Entertainment',
      'Power',
      'New Item'
    ];
    const passengerTableData = [
      ['Business', '16', 'Lie-flat', '19"', 'true', 'Overhead video', 'true', 'Yo'],
      ['Main extra cabin', '52', '36", bulkhead, exit rows', '16.6"', 'Overhead video', 'Overhead video', 'Yes', 'Yeah'],
    ];

    return(
      <form onSubmit={this.handleSubmit}>
        <h2>General Info</h2>
        <Row>
          <Column span={4}>
            <Input
              id="title"
              type="select"
              value={this.state.contact.title}
              placeholder="Select your title"
              label="Title"
              options={nameTitles}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="fname"
              type="text"
              value={this.state.contact.fname}
              placeholder=""
              label="First name"
              required={true}
              helptext="Enter your legal first name"
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="lname"
              type="text"
              value={this.state.contact.lname}
              placeholder=""
              label="Last name"
              required={true}
              helptext="Enter your legal last name"
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="suffix"
              type="select"
              value={this.state.contact.suffix}
              placeholder="Select your suffix"
              label="Suffix"
              options={nameSuffixes}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="city"
              type="text"
              value={this.state.contact.city}
              placeholder="Enter the city in which you live"
              label="City"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="state"
              type="select"
              value={this.state.contact.state}
              placeholder="Select a state"
              label="State"
              required={true}
              options={usStates}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="postalcode"
              type="number"
              value={this.state.contact.postalcode}
              placeholder=""
              label="Postal code"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
        </Row>
        <hr />
        <h2>Class Info</h2>
        <Table
          headers={passengerTableHeaders}
          data={passengerTableData}  />
        <hr />
        <h2>Passenger Info</h2>
        <Row>
          <Column span={4}>
            <Input
              id="numpassengers"
              type="number"
              value={this.state.contact.numpassengers}
              label="Number of passengers"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="seatclass"
              type="select"
              value={this.state.contact.seatclass}
              placeholder="Select a class..."
              label="Class"
              required={true}
              options={seatClasses}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="ticketmethod"
              type="select"
              value={this.state.contact.ticketmethod}
              placeholder="Select one..."
              label="How will you ticket?"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
        </Row>
        <Row>
          <Column span={4}>
            <Input
              id="recordlocator"
              type="text"
              value={this.state.contact.recordlocator}
              label="Record locator"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="flightnum"
              type="text"
              value={this.state.contact.flightnum}
              label="Flight number"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
        </Row>
        <Row>
          <Column span={4}>
            <Input
              id="flightdate"
              type="date"
              value={this.state.contact.flightdate}
              placeholder="Enter the city in which you live"
              label="Flight date"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="fromlocation"
              type="search"
              value={this.state.contact.fromlocation}
              placeholder="Select a state"
              label="From"
              required={true}
              options={usStates}
              onChange={this.handleInputChange} />
          </Column>
          <Column span={4}>
            <Input
              id="tolocation"
              type="search"
              value={this.state.contact.tolocation}
              label="To"
              required={true}
              onChange={this.handleInputChange} />
          </Column>
        </Row>
        <Button type="danger" value="Delete section" />
        <Button type="secondary" value="Add section" />

        <hr />
        <h2>Comments Info</h2>
        <Input
          id="comments"
          type="textarea"
          value={this.state.contact.comments}
          limit={1500}
          placeholder="Please add comments here..."
          label="Comments"
          onChange={this.handleInputChange} />
        <hr />
        <div style={{
            textAlign: 'right'
        }}>
          <Button type="secondary" size="large" value="Cancel" />
          <Button type="primary" size="large" submit={true} value="Submit" />
        </div>
        <pre style={{
            marginTop: '64px',
            borderRadius: 3,
            padding: 16,
            backgroundColor: 'rgba(255,255,255,0.75)',
            color: '#627f90',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>{JSON.stringify(this.state.contact)}</pre>
      </form>
    )
  }
}
