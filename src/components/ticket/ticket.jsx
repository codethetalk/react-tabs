import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getTicket } from '../../actions'

class Ticket extends React.Component {
    componentDidMount() {
        debugger
        const resourceId = parseInt(this.props.match.params.id)
        this.props.getTicket(resourceId)
    }
    render() {
        debugger
        return (
            <div>
                ticket {this.props.match.params.id}
            </div>
        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ getTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)