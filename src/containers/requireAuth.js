import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />
      }
      return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(RequireAuth)
}