import React from 'react';
import {browserHistory} from 'react-router';

import store from '../store';
import Nav from '../Components/nav';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(store.session);
        console.log(this.refs)
        store.session.login(this.refs.email.value, this.refs.password.value);
    }
    render() {
        return (
            <main>
                <Nav/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="email" placeholder="email" ref="email" name="email"/>
                    <input type="password" placeholder="password" ref="password" name="password"/>
                    <input type="submit" value="login"/>
                </form>
            </main>
        );
    }
}