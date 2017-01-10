import React from 'react';
import {browserHistory} from 'react-router';

import store from '../store';
import Nav from '../Components/nav';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs)
        store.users.register(this.refs.email.value, this.refs.password.value);
    }
    render() {
        return (
            <main className="login-signup">
                <Nav/>
                <h3>Signup</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" placeholder="email" ref="email" name="email"/>
                    <input type="password" placeholder="password" ref="password" name="password"/>
                    <input type="submit" value="login"/>
                    <p>Have an account? <a href="/login">Login</a></p>
                </form>
            </main>
        );
    }
}