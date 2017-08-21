import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { requestLogin } from '../../actions'
import Form from './form'

class Login extends React.Component {
    render() {
        const { history, requestLogin } = this.props
        return (<Form
            onSubmit={fields =>
                requestLogin({
                    fields,
                    callback: () => {
                        history.push('/')
                    }
                })}
        />)
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ requestLogin }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
