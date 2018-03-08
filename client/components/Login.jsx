import React, { Component } from 'react';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
      password:'',
      isLoggedIn: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    //check if logged in
  }
  onChange(ev){
    const {name, value} = ev.target;
    name === 'username' ? this.setState({ username: value }) : this.setState({ password: value });
  }
  onSubmit(){
    alert(`Submitted username: ${this.state.username}, password: ${this.state.password}`)
    this.setState({ isLoggedIn: true })
  }
  render(){
    const { isLoggedIn, username } = this.state;
    return (
      <div>
        { !isLoggedIn &&
          <form>
            <input
              onChange = {this.onChange}
              placeholder='username'
              name='username'>
            </input>
            <input
              onChange = {this.onChange}
              placeholder='password'
              name='password'>
            </input>
            <button onClick={this.onSubmit}>Go</button>
          </form>
        }
        { isLoggedIn &&
            <h3>Welcome, { username }!</h3>
        }
      </div>
    )
  }
}
