import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Prompt } from 'react-router'
import { getTicket, updateTicket } from '../../actions'


class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
    }
    componentDidMount() {
        const resourceId = parseInt(this.props.match.params.id)
        this.props.getTicket(resourceId)
    }

    save(data) {
        this.props.updateTicket(data)
    }
    render() {
        const { updateTicket, pristine, reset, submitting, initialValues, handleSubmit } = this.props
        const data = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ]
        return (
            <div className="grid-x">
                <Prompt when={!pristine} message="Are you sure?" />
                <div className="small-6 cell">
                    <AreaChart width={600} height={400} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                        <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                        <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
                    </AreaChart>
                </div>
                <div className="small-6 cell">
                    <form onSubmit={handleSubmit(this.save)}>
                        <div>
                            <label>First Name</label>
                            <div>
                                <Field name="firstName" component="input" type="text" placeholder="First Name" />
                            </div>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <div>
                                <Field name="lastName" component="input" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div>
                            <label>Age</label>
                            <div>
                                <Field name="age" component="input" type="number" placeholder="Age" />
                            </div>
                        </div>
                        <div>
                            <label>Sex</label>
                            <div>
                                <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
                                <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="employed">Employed</label>
                            <div>
                                <Field name="employed" id="employed" component="input" type="checkbox" />
                            </div>
                        </div>
                        <div>
                            <label>Bio</label>
                            <div>
                                <Field name="bio" component="textarea" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" disabled={pristine || submitting}>Submit</button>
                            <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        initialValues: state.resources.ticketDTOs.find(t => t.id === parseInt(props.match.params.id))
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getTicket, updateTicket }, dispatch)

Ticket = reduxForm({
    form: 'ticket'
})(Ticket)

Ticket = connect(mapStateToProps, mapDispatchToProps)(Ticket)

export default Ticket