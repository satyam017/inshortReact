import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            count : 0,
            countTime: 0,
            toggle:true
        }
        // console.log('Constructor');
    }
    changeCounter(){
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidMount(){
      console.log('ComponentDidMount');
      // alert('ComponentDidMount')
     
    }
    componentDidUpdate(){
      console.warn('componentDidUpdate');
      if(this.state.count == 0){
       this.setState({
        countTime: this.state.countTime + 1
       })
       
      }
    }
    componentWillUnmount(){
     console.log('componentWillUnmount');
    }
  render() {
    // console.log('render');
    console.log(this.state.countTime);
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={()=>this.changeCounter()}>
            Increment
        </button>
        <div>

        {/* <button style={{marginTop:20}} >
          Unmount Component
        </button> */}
        </div>
      </div>
    )
  }
}

export default Counter
