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
    this.setState({
      convertfrom: event.target.value
    });
    convertCurrency(event.target.value, this.state.valueFrom, this.state.valueTo, (err, amount) => {
        this.setState({
          convertto: amount
        });
      });
  }

handleChangeTo(event){
  this.setState({
    convertto: event.target.value
  });
  convertCurrency(event.target.value, this.state.valueTo, this.state.valueFrom, (err, amount) => {
      this.setState({
        convertfrom: amount
      });
 });

}

handleSelectChangeFrom(event){
  this.setState({
    valueFrom: event.target.value,
  });
  convertCurrency(this.state.convertfrom, event.target.value, this.state.valueTo, (err, amount) => {
      this.setState({
        convertto: amount
      });
    });

}

handleSelectChangeTo(event){
  this.setState({
    valueTo: event.target.value
  });

  convertCurrency(this.state.convertto, event.target.value, this.state.valueFrom, (err, amount) => {
      this.setState({
        convertfrom: amount
      });
 });
}

render(){
 //convertCurrency(this.state.convertfrom, this.state.valueFrom, this.state.valueTo, (err, amount) => console.log(amount));
  return(
      <div className="container">
        <div className = "row">
            <div className = "col-md-8">
              <h3 className="text-center">Currency Converter</h3>
              <input type='text' className = "form-control form-control-sm" value={this.state.convertfrom} onChange = {this.handleChange}></input>
              <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                      <select className="form-control mb-4 mt-2" onChange = {this.handleSelectChangeFrom}>
                          <option value="AED" >AED</option>
                          <option value="AFN" >AFN</option>
                          <option value="ALL" >ALL</option>
                          <option value="AMD" >AMD</option>
                          <option value="ANG" >ANG</option>
                          <option value="AOA" >AOA</option>
                          <option value="ARS" >ARS</option>
                          <option value="AUD" >AUD</option>
                          <option value="AWG" >AWG</option>
                          <option value="AZN" >AZN</option>
                          <option value="BAM" >BAM</option>
                          <option value="BBD" >BBD</option>
                          <option value="BDT" >BDT</option>
                          <option value="BGN" >BGN</option>
                          <option value="BHD" >BHD</option>
                          <option value="BIF" >BIF</option>
                          <option value="BND" >BND</option>
                          <option value="CVE" >CVE</option>
                          <option value="CZK" >CZK</option>
                          <option value="DJF" >DJF</option>
                          <option value="DKK" >DKK</option>
                          <option value="DOP" >DOP</option>
                          <option value="DZD" >DZD</option>
                          <option value="GBP" selected>GBP</option>
                          <option value="MWK" >MWK</option>
                          <option value="MXN" >MXN</option>
                          <option value="MYR" >MYR</option>
                          <option value="MZN" >MZN</option>
                          <option value="NAD" >NAD</option>
                          <option value="NGN" >NGN</option>
                          <option value="NIO" >NIO</option>
                          <option value="NOK" >NOK</option>
                          <option value="USD" >USD</option>
                          <option value="UYU" >UYU</option>
                          <option value="UZS" >UZS</option>
                          <option value="VEF" >VEF</option>
                          <option value="VND" >VND</option>
                          <option value="ZAR" >ZAR</option>
                          <option value="ZMW" >ZMW</option>
                      </select>
                  </div>
                  <div className="col-md-4"></div>
              </div>
              <input type='text' className = "form-control form-control-sm" value={this.state.convertto} onChange = {this.handleChangeTo}></input>
              <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <select className= "form-control mb-4 mt-2" onChange={this.handleSelectChangeTo}>
                        <option value="AED" >AED</option>
                        <option value="AFN" >AFN</option>
                        <option value="ALL" >ALL</option>
                        <option value="AMD" >AMD</option>
                        <option value="ANG" >ANG</option>
                        <option value="AOA" >AOA</option>
                        <option value="ARS" >ARS</option>
                        <option value="AUD" >AUD</option>
                        <option value="AWG" >AWG</option>
                        <option value="AZN" >AZN</option>
                        <option value="BAM" >BAM</option>
                        <option value="BBD" >BBD</option>
                        <option value="BDT" >BDT</option>
                        <option value="BGN" >BGN</option>
                        <option value="BHD" >BHD</option>
                        <option value="BIF" >BIF</option>
                        <option value="BND" >BND</option>
                        <option value="CVE" >CVE</option>
                        <option value="CZK" >CZK</option>
                        <option value="DJF" >DJF</option>
                        <option value="DKK" >DKK</option>
                        <option value="DOP" >DOP</option>
                        <option value="DZD" >DZD</option>
                        <option value="GBP" >GBP</option>
                        <option value="MWK" >MWK</option>
                        <option value="MXN" >MXN</option>
                        <option value="MYR" >MYR</option>
                        <option value="MZN" >MZN</option>
                        <option value="NAD" >NAD</option>
                        <option value="NGN" >NGN</option>
                        <option value="NIO" >NIO</option>
                        <option value="NOK" >NOK</option>
                        <option value="USD" selected>USD</option>
                        <option value="UYU" >UYU</option>
                        <option value="UZS" >UZS</option>
                        <option value="VEF" >VEF</option>
                        <option value="VND" >VND</option>
                        <option value="ZAR" >ZAR</option>
                        <option value="ZMW" >ZMW</option>
                    </select>
                  </div>
                  <div className="col-md-4"></div>
              </div>
            </div>

            <div className= "col-md-4 text-center">
                <Modals />
            </div>
        </div>
      </div>
    );
  }
}

export default Currency;
