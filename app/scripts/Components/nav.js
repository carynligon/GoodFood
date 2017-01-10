import React from 'react';

export default class Nav extends React.Component {
    render() {
        return(
            <nav>
                <a href="/">Home</a>
                <a href="/myplaces">My Places</a>
            </nav>
        );
    }
}