import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import { login } from "../auth/Auth.action";
import { firebaseApp } from "../../../data/repositories/firestore"
import PageLoader from "./Loading"

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    loading: state.auth.loading
  }
}

class LogIn extends Component {
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
    const { username, password } = this.state;
    this.props.login({ username, password });
    this.setState({ username: "", password: "" });
  }
  render() {
    const { username, password } = this.state;
    const { auth } = this.props;
    if (auth.uid) return (<Redirect to='/' />)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <h1 htmlFor="title">Login</h1>
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
              <label>Password:  </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
        <PageLoader/>
      </div>
    );
  }
}

const LogInForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);

export default LogInForm;  