import React, { Component } from 'react';
import './Signup.css';
class Signup extends React.Component {
  render() {
    return (
      <div>
      <div><h3>Welcome to Hiring Portal Platform !! Please Sign Up</h3></div>
      <form>
      <div>
      <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
      </div>

      <div>
      <input type="email" placeholder="Email ID (xyz@abcd.com)" name="email"size ="30" required></input>
      </div>
      <div>      
    <input type="password" placeholder="Password" name="psw" size ="30" required></input>
    </div>
      <div>
      <input type="email" placeholder="Verifier Email ID (xyz@abcd.com)" name="email" size ="30" required></input>
      </div>

      <button class="button1">Sign Up</button>
      <button class="button2">Login</button>
      </form>
      </div>
    );
  }
}

export default Signup;