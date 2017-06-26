import React, { Component } from 'react';
import './App.css';

function dec2bin(num){
 return (num >>> 0).toString(2)
}

class Widget extends Component {

  constructor (){
    super();
    this.state = {
      clickCount:0
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState (event) {
    if (event.which == 13){
      this.setState({
       clickCount: Number(event.target.value)
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="widget">
          <label>Click Here</label>
          <input id="text-field"  type="text" onKeyPress={this.updateState}/>
        </div>

        <div>
          <h1>{dec2bin(this.state.clickCount)}</h1>
        </div>
      </div>
    )
  }

}

export default Widget;
