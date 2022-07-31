import React, { Component } from 'react'
import './Login.css'

class Login extends Component {

   


  render() {
    return (
       <>
       <div className='login'>
       <div className='hd'>
            <h4>hello login page !</h4>
             <p>email:<input type='text' id='inp-e'/></p>
             <p>password:<input type='text' id='inp-pass'/></p>
             <p>re-enter password:<input type='text' id='inp-repass'/></p>

            <button onClick={this.access}>Access the App</button> <br></br>
            <button onClick={this.props.goback}>go back</button>
          
       </div>


       </div>
       </>
    )
  }
}

export default Login