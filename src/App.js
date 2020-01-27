import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    }
    this.onReSizeClick = this.onReSizeClick.bind(this);
  }
  onPickerClick = (param) => {
    this.setState({
      color: param
    });
  }
  onResetClick() {
    this.setState({
      color: 'red',
      fontSize: 12
    });
  }
  onReSizeClick(gt) {
    if (this.state.fontSize <= 8 && gt < 0) {
      return;
    }
    else if(this.state.fontSize >=16 && gt > 0){
      return;
    }
    else {
      this.setState({
        fontSize: this.state.fontSize + gt
      });
    }
  }
  render() {

    return (
      <div className="container mt-5">
        <div className="row">
          <ColorPicker onPickerClick={this.onPickerClick} color={this.state.color} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting onReSizeClick={this.onReSizeClick} fontSize={this.state.fontSize} />
            <Reset onResetClick={(gt) => this.onResetClick(gt)} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>

      </div>
    );
  }
}

export default App;
