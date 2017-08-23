import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { PropTypes as T } from 'prop-types'
import { bindActionCreators } from 'redux'
import { getTicketDtos } from '../../actions'

class Header extends React.Component {
    render() {
        const { location, authenticated, ticketDTOs } = this.props
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li><NavLink className="nav-item" exact to="/" activeStyle={{ fontWeight: 'bold', color: 'red' }}><i className="fa fa-home"> </i></NavLink></li>
                        {authenticated ? ticketDTOs.map((r, index) =>
                            <li key={index}><NavLink className="nav-item" to={`/ticket/${r.id}`} activeStyle={{ fontWeight: 'bold', color: 'red' }}>{r.firstName}</NavLink></li>
                        ) :
                            <li><NavLink className="nav-item" to="/login" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Login</NavLink></li>}
                    </ul>
                </div>
            </div>
        )
    }
}

Header.PropTypes = {
    authenticated: T.bool.isRequired,
    ticketDTOs: T.array
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated, ticketDTOs: state.resources.ticketDTOs }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getTicketDtos }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))