import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            newUsername: '',
            newPassword: '',
            email: '',
            newPasswordMatch: ''
        }
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit(e) {
        e.preventDefault()
        if (this.props.onSubmit) {
            if (e.target.name === 'signup_submit' && this.state.newPassword === this.state.newPasswordMatch) {
                const signup = { username: this.state.newUsername, password: this.state.newPassword, email: this.state.email }
                this.props.onSubmit(signup)
            } else {
                const login = { username: this.state.username, password: this.state.password }
                this.props.onSubmit(login)
            }
        }
        this.setState({
            username: '',
            password: '',
            newUsername: '',
            newPassword: '',
            email: '',
            newPasswordMatch: ''
        });
    };

    render() {
        return (
            <div className="grid-x grid-padding-x align-center">
                <div className="login-box">
                    <div className="login-box-form-section">
                        <h1 className="login-box-title">Login</h1>
                        <input className="login-box-input" type="text" name="username" placeholder="Username" value={this.state.username} onChange={e => this.change(e)} />
                        <input className="login-box-input" type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)} />
                        <input className="login-box-submit-button" type="submit" name="login_submit" value="Login" onClick={e => this.onSubmit(e)} />
                    </div>
                    <div className="outer">
                        <div className="inner"></div>
                    </div>
                    <div className="login-box-form-section">
                        <h1 className="login-box-title">Signup</h1>
                        <input className="login-box-input" type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} />
                        <input className="login-box-input" type="text" name="newUsername" placeholder="Username" value={this.state.newUsername} onChange={e => this.change(e)} />
                        <input className="login-box-input" type="password" name="newPassword" placeholder="Password" value={this.state.newPassword} onChange={e => this.change(e)} />
                        <input className="login-box-input" type="password" name="newPasswordMatch" placeholder="Retype password" value={this.state.newPasswordMatch} onChange={e => this.change(e)} />
                        <input className="login-box-submit-button" type="submit" name="signup_submit" value="Signup" onClick={(e) => this.onSubmit(e)} />
                    </div>
                </div>
            </div>
        )
    }
}