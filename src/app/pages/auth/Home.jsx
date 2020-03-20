import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../auth/Auth.action";
import AuthComponent from './AuthComponent'
import PageLoader from "./Loading"

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'; 

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  }
}

class HomePage extends Component {
  render() {
    return (
      <Container component="main" maxWidth="lg">
        <div>
          <AuthComponent />
          <PageLoader />
          <div>
            <Typography component="h1" variant="h5">
              WELCOME TO HOME PAGE
              <Button style={{ marginLeft: "60%" }} variant="contained" color="primary" onClick={this.props.signout}>Log Out</Button>
            </Typography>
          </div>
        </div>
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(HomePage)