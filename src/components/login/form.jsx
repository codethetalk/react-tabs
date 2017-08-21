import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit(e) {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state);
        }
        this.setState({
            username: '',
            password: '',
        });
    };

    render() {
        return (
            <div className="grid-x grid-padding-x align-center">
                <div className="login-box">
                    <div className="login-box-form-section">
                        <h1 className="login-box-title">Login</h1>
                        <input className="login-box-input" type="text" name="username" placeholder="Username" value={this.state.username} onChange={e => this.change(e)} />
                        <input className="login-box-input" type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)}/>
                        <input className="login-box-submit-button" type="submit" name="login_submit" value="Login" onClick={e => this.onSubmit(e)} />
                    </div>
                </div>
            </div>
        )
    }
}