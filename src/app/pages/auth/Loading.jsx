import React , { Component } from 'react';
import { connect } from 'react-redux';
import LoaderGif from './assets/giphy.gif'

class PageLoader extends Component {
    state = {}

    render(){
        const { loading } = this.props;

        if (!loading) return null;

        return(
            <div className = "loader-contatiner">
                <div className = "loader">
                    <img src={LoaderGif}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.auth.loading
})

export default connect(mapStateToProps)(PageLoader);