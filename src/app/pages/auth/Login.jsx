import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../auth/Auth.action";
import AuthComponent from './AuthComponent';
import PageLoader from "./Loading";

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    match: state.auth.match
  }
}

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
    this.setState({ password: "" });
  }
  render() {
    const { username, password } = this.state;
    const { auth, match } = this.props;
    if (auth.uid) return (<Redirect to='/' />)
    const checkPass = !match ? <h3 style={{ marginTop: "5%", marginBottom: "5%", color: "red", marginLeft: "6%" }}>Username and Password Do Not Match!</h3> : null;
    return (
      <Container component="main" maxWidth="xs">
        <AuthComponent />
        <div>
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <div>
                <Typography style={{ marginLeft: '27%' }} component="h1" variant="h3">
                  Sign in
                </Typography>
              </div>
              {checkPass}
              <PageLoader />
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Email Address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={username}
                  onChange={this.handleChange}
                  autoFocus
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                />
              </div>
              <Button style={{ marginTop: '10%' }} fullWidth variant="contained" color="primary" type="submit">Login</Button>
            </div>
            <Grid container>
              <Grid style={{ marginLeft: '23%', marginTop: '10%' }} item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const LogInForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);

export default LogInForm;  