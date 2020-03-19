import React, { Component } from "react";  
import { connect } from "react-redux";
import { signupTodo } from "./Todo.actions";

function mapDispatchToProps(dispatch) {
    return {
        signupTodo: (username,password) => signupTodo(username,password)
    };
  }

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username , password  } = this.state;
    this.props.signupTodo({ username , password });
    this.setState({ username: "", password: "" });
  }
  render() {
    const { username , password } = this.state;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <h1 htmlFor="title">Sign UP</h1>
            </div>
            <div>
                <label>Username: </label>
                <input
                    type="email"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.handleChange}
                />
            </div>
            
            <button type="submit">SAVE</button>
          </div>
        </form>
      </div>
    );
  }
}

const SignUpForm = connect(
  null,
  mapDispatchToProps,
)(SignUp);

export default SignUpForm;  