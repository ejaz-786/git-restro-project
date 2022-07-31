import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Tester from './Tester'
// import Array from './Array'

class App extends Component {
 
  state = {
    flagS:false,
    flagL:false,
    clickVal:0
  }
  
  clicks = ()=>{
    this.setState({
      clickVal:1
    })
  }

  login=()=>{
    this.setState({
      flagL:true
    })
  }


  goBack=()=>{
    this.setState({
      flagL:false
    })
  }

  signup = () =>{
    this.setState({
       flagS: true
    })
   
  }
  render() {

    if(this.state.clickVal === 1){
      return(
        <>
         {this.state.flagL === false ? <Tester check1={this.login}/> : <Login goback={this.goBack}/>}
        </>
      )
    }
    else{
      return(
        <>
         {this.state.flagS === false ? <Tester check2={this.signup} checks2={this.clicks}/> : <SignUp goback={this.goBack}/>}
        </>
      )
    }

    // return (
    //   <>
 
    //     {this.state.flagL === false ? <Tester check1={this.login}/> : <Login goback={this.goBack}/>}

      {/* <SignUp/> */}
      {/* <Array/> */}
      // </>
  //   )
  // }
}
}

export default App