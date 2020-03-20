import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../auth/Auth.action";
import PageLoader from "./Loading";
import AuthComponent from './AuthComponent';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const mapDispatchToProps = dispatch => ({
  signup: (username, password) => dispatch(signup(username, password))
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confpassword: "",
      match: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password, confpassword } = this.state;
    if (confpassword===password){
      this.props.signup({ username, password });
      this.setState({ username: "", password: "", confpassword: "" });
    }else{
      this.setState({ password: "", confpassword: "" , match:false });
    }
  }
  render() {
    const { username, password, confpassword , match } = this.state;
    const checkPass = !match ? <h3 style={{marginTop:"5%",marginBottom:"5%", color:"red", marginLeft:"20%"}}>Password Do Not Match!</h3>: null;
    return (
      <Container component="main" maxWidth="xs">
        <PageLoader />
        <div>
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <div>
                <Typography style={{ marginLeft: '27%' }} component="h1" variant="h3">
                  Sign up
                </Typography>
              </div>
                {checkPass}
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
              <div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confpassword"
                    label="Confirm Password"
                    type="password"
                    id="confpassword"
                    value={confpassword}
                    onChange={this.handleChange}
                    autoComplete="current-password"
                  />
              </div>
              <Button style={{ marginTop: '10%' }} fullWidth variant="contained" color="primary" type="submit">Signup</Button>
            </div>
            <Grid container>
              <Grid style={{ marginLeft: '27%', marginTop: '10%' }} item>
                <Link href="/login" variant="body2">
                  {"Have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const SignUpForm = connect(
  null,
  mapDispatchToProps,
)(SignUp);

export default SignUpForm;  