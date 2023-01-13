import React, { Component } from "react";

class Welcome extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thankyou For Subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>
            {this.state.message}
        </h1>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Welcome;
