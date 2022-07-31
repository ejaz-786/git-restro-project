import React, { Component } from 'react'
import './Signup.css'

class SignUp extends Component {
  render() {
    return (
      <div>
         <div className='signup-form'>
  
            <h4>hello SignUp  page !</h4>
         
             <p>Name:<input type='text' id='inp-e-s'/></p>
             <p>email:<input type='text' id='inp-e-s'/></p>
             <p>password:<input type='text' id='inp-pass-s'/></p>


            <button onClick={this.access}>Create Account</button> <br></br>
            <button onClick={this.props.goback}>go back</button>

        </div> 
       
      </div>
    )
  }
}

export default SignUp