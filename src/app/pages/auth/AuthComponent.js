import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
    }
}

class AuthComponent extends Component {
    render() {
        const { auth } = this.props
        if (!auth.uid) {
            return <Redirect to="/login" />
        }
        return <div></div>
    }
}

AuthComponent.propTypes = {
    auth: PropTypes.object,
}

export { AuthComponent }
export default connect(mapStateToProps, null)(AuthComponent)
