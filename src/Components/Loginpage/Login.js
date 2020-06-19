import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './Login.css';

import Userlogin from './Userlogin';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            userLoginData: "",
            name: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }


    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 9) {
            this.setState({ emailError: 'Provide valid email', passwordError: 'password length should >=9' })
        }
        else if (!this.state.name.includes("@")) {
            this.setState({ emailError: 'Invalid email id' })
        }
        else if (this.state.password.length < 9) {
            this.setState({ passwordError: 'minimum length should more than 8' })
        }
        else {
            return true
        }
    }

    onSubmit = (e) => {
        this.setState({ emailError: '', passwordError: '' })
        e.preventDefault();
        let { name, password } = this.state;
        console.warn(this.state);
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                if (this.valid()) {
                    if (name === 'hruday@gmail.com' && password === 'hruday123') {
                        this.props.history.push('Dashboard')
                    } else {
                        alert('invalid username or password');
                    }
                }

            })
        })
    }
    render() {
        return (
            <div className="Loginpage">
                <Userlogin />
                <div className="formContent">

                    <h2 className="mb-2">Employee Login</h2>
                    <form name="loginForm" onSubmit={this.onSubmit}>
                        <div className="form-group-collection">
                            <input type="email" name="name" placeholder="Enter username" onChange={(event) => this.setState({ name: event.target.value })} />
                            <p className="error">{this.state.emailError}</p>
                            <input type="password" name="password" placeholder="Enter Password" onChange={(event) => this.setState({ password: event.target.value })} />
                            <p className="error">{this.state.passwordError}</p>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);