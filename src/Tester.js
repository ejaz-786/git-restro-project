import React, { Component } from 'react'
import './Tester.css';
// import Login from './Login';

class Tester extends Component {

   test = ()=>{
    this.props.check2();
    this.props.checks2();
    // alert();
   }

  render() {
    return (
      <div>
  
          <div id='main' >
                
                <div id='logo'>
                    <img src='https://i.pinimg.com/736x/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg' alt='ag'/>
                    <span>Restaurant App</span> 

                </div>


                <div id='search-bar'>
                    <input id='input' type='text'/>
                    <button id='bt-search'>Search</button>

                </div>

                <div id='forms-ls'>
                    <button id='bt-l' onClick={this.props.check1}>LogIn</button>
                    <button id='bt-s' onClick={this.test} >SignUp</button>
                    {/* <button id='bt-s' onClick={this.signupcheck} >SignUp</button> */}
                </div>
          </div>
          <div id='drop-main'>
                <div className='dropdon'>

                </div>
          </div>
        

          <div id='heading'>
                  <h3>!!! Premium Quality Restaurant and Dishes !!!</h3>
                  <p>Enjoy the meal with affordable price at anytime.please visit the offers section below.</p>
           </div>

           <div id='offers'>

           </div>

      </div>
    )
  }
}

export default Tester