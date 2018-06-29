import React, { Component } from 'react';
import Modals from './Modal'
import convertCurrency from './converter';

class Currency extends Component{
  constructor(props){
    super(props);
    this.state = {
      convertfrom: '',
      convertto: '',
      valueFrom: 'GBP',
      valueTo: 'USD',
      result: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleSelectChangeFrom = this.handleSelectChangeFrom.bind(this);
    this.handleSelectChangeTo = this.handleSelectChangeTo.bind(this);
  }

  handleChange(event){
    let converted = convertCurrency(event.target.value, this.state.valueFrom, this.state.valueTo, function(err, amount) {
      return amount
    });
    this.setState({
      convertfrom: event.target.value,
      convertto: ''
    });
  }

handleChangeTo(event){
    this.setState({
      convertto: event.target.value,
      convertfrom: event.target.value/4
    });
}

handleSelectChangeFrom(event){
  this.setState({
    valueFrom: event.target.value
  });
}

handleSelectChangeTo(event){
  this.setState({
    valueTo: event.target.value
  });
}

render(){
  convertCurrency(this.state.convertfrom, this.state.valueFrom, this.state.valueTo, (err, amount) => {
    console.log(amount)
  });
  return(
      <div className="container">
        <div className = "row">
            <div className = "col-md-8">
              <h3 className="text-center">Currency Converter</h3>
              <input type='text' className = "form-control form-control-sm" value={this.state.convertfrom} onChange = {this.handleChange}></input>
              <select id="CURR_FROM" className="mb-4 mt-2" onChange = {this.handleSelectChangeFrom}>
                  <option value="BYN" >BYN</option>
                  <option value="GBP" selected>GBP</option>
                  <option value="USD">USD</option>
                  <option value="UYU" >UYU</option>
              </select>
              <input type='text' className = "form-control form-control-sm" value={this.state.convertto} onChange = {this.handleChangeTo}></input>
              <select id="CURR_TO" className= "mb-4 mt-2" onChange={this.handleSelectChangeTo}>
                  <option value="BYN" >BYN</option>
                  <option value="GBP">GBP</option>
                  <option value="USD" selected>USD</option>
                  <option value="UYU" >UYU</option>
              </select>
            </div>

            <div className= "col-md-4">
                <Modals />

            </div>
        </div>
      </div>
    );
  }
}

export default Currency;
