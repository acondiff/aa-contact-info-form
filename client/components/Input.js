import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Radium from 'radium';

@Radium
export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: null
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    }, this.props.onChange(date));
  }

  render() {
    const inputStyles = {
      border: 0,
      padding: 16,
      minHeight: 40,
      backgroundColor: 'white',
      outline: 0,
      width: '100%',
      marginBottom: 16,
      boxShadow: '0 2px 2px #d0dae0',
      transition: '.2s',
      borderRadius: '1px',
      WebkitAppearance: 'none',
      ':hover': {
        boxShadow: '0 4px 8px #d0dae0'
      },
      ':focus': {
        boxShadow: '0 4px 8px #d0dae0, inset 0 -2px 0 #0078d2'
      }
    }
    const selectArrow = {
      display: 'block',
      width: 8,
      height: 8,
      borderBottom: '1px solid #0078d2',
      borderRight: '1px solid #0078d2',
      transform: 'rotate(45deg)',
      position: 'absolute',
      right: 20,
      top: 36
    }
    return(
      <div>
        <label
          htmlFor={'field-' + this.props.id}
          style={{
            fontSize: 14,
            display: 'inline-block',
            marginBottom: 4,
            width: '100%',
            position: 'relative'
          }}>
          {this.props.type === 'select' && <span style={selectArrow} />}
          {(this.props.label) && (<span>{this.props.label} </span>)}
          {(this.props.required) && (<strong><abbr title="required" style={{color:'#d32027'}}>*</abbr></strong>)}
        </label>
        {(this.props.type === 'text')   && (
          <input
            style={inputStyles}
            type="text"
            id={'field-' + this.props.id}
            onChange={this.props.onChange}
            name={this.props.id} />
        )}
        {(this.props.type === 'select') && (
          <select
            style={inputStyles}
            id={'field-' + this.props.id}
            selected={this.props.value}
            onChange={this.props.onChange}
            name={this.props.id}>
            {(this.props.placeholder !== '' && this.props.value === '') && (<option value=''>{this.props.placeholder}</option>)}
            {
              (this.props.options) && this.props.options.map((option) =>
                <option key={option.value} value={option.value}>{option.name}</option>
              )
            }
          </select>
        )}
        {(this.props.type === 'number') && (
          <input
            style={inputStyles}
            type="number"
            id={'field-' + this.props.id}
            onChange={this.props.onChange}
            name={this.props.id} />
        )}
        {(this.props.type === 'date') && (
          <DatePicker
            style={inputStyles}
            selected={this.state.startDate}
            onChange={this.handleDateChange}
            placeholderText={this.props.placeholder}
            name={this.props.id} />
        )}
        {(this.props.type === 'search') && (
          <input
            style={inputStyles}
            type="text"
            id={'field-' + this.props.id}
            onChange={this.props.onChange}
            name={this.props.id} />
        )}
        {(this.props.type === 'textarea') && (
          <textarea
            rows="5"
            style={Object.assign({resize: 'none'}, inputStyles)}
            placeholder={this.props.placeholder}
            id={'field-' + this.props.id}
            onChange={this.props.onChange}
            name={this.props.id} />
        )}
        {this.props.description && (
          <span style={{
            fontSize: '12px',
            marginTop: '-12px',
            display: 'inherit',
            color: '#627f90'
        }}>{this.props.description}</span>)}
      </div>
    )
  }
}
