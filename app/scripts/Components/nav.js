import React from 'react';

import store from '../store';

export default class Nav extends React.Component {
    logout() {
        store.session.logout();
    }
    render() {
        return(
            <nav>
                <a href="/">Home</a>
                <p className="logout" onClick={this.logout.bind(this)}>Logout</p>
                <a href="/myplaces">My Places</a>
            </nav>
        );
    }
}