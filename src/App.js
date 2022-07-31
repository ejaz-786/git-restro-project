import React, { Component } from 'react'
import Login from './Login'
import Tester from './Tester'

class App extends Component {
 
  state = {
    vals:null
  }

   

  render() {
    return (
      <>
      <Tester/>
      <Login/>
      
      </>
    )
  }
}

export default App