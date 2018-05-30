import React, {Component} from 'react'




class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = event => {

    this.setState({
        [event.target.name]: event.target.value,
      //  password: event.target.value
      });
   };

   handleFormSubmit = event => {
     event.preventDefault();
     const username= this.state.username;
     const password= this.state.password;
//const {username,password} =this.state

    if (username && password){
      this.props.onSubmit({ username, password })
    }
    }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}


export default Login
