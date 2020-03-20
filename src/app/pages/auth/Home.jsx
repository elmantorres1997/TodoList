import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../auth/Auth.action";
import AuthComponent from './AuthComponent'

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout())
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <AuthComponent />
        <div>
          <label>WELCOME TO HOME PAGE</label>
        </div>
        <div>
          <button onClick={this.props.signout}>Log Out</button>
        </div>
      </div>

    )
  }
}

export default connect(null, mapDispatchToProps)(HomePage)