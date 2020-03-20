import React, { Component } from "react";  
import { connect } from "react-redux";
import { signout } from "../auth/Auth.action";
import { Redirect } from 'react-router-dom';

const mapStateToProps =  (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signout: () => dispatch(signout())
  }
}

class HomePage extends Component {
  render(){
    const { auth } = this.props;
    if (!auth.uid) return (<Redirect to='/login'/>)
    return(
      <div>
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

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)