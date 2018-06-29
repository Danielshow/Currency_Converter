import React, { Component } from 'react';

class Currency extends Component{
  constructor(props){
    super(props);
    this.state = {
      convertfrom: '',
      convertto: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      convertfrom: event.target.value,
      convertto: event.target.value * 4
    });
  }

  render(){
    return(
      <div className = "row">
          <div className = "col-md-8">
            <h3 className="text-center">Currency Converter</h3>
            <input type='text' className = "form-control form-control-sm" value={this.state.convertfrom} onChange = {this.handleChange}></input>
            <select id="CURR_FROM" className="mb-4">
                <option value="BYN" >BYN</option>
                <option value="GBP" selected>GBP</option>
                <option value="USD">USD</option>
                <option value="UYU" >UYU</option>
            </select>
            <input type='text' className = "form-control form-control-sm" value={this.state.convertto}></input>
            <select id="CURR_TO" className= "mb-4">
                <option value="BYN" >BYN</option>
                <option value="GBP">GBP</option>
                <option value="USD selected">USD</option>
                <option value="UYU" >UYU</option>
            </select>
          </div>
              my portfolio
          <div className= "col-md-4">

          </div>
      </div>
    );
  }
}

export default Currency;
