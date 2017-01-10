import React from 'react';

import Search from '../Components/Search';
import Nav from '../Components/Nav';

export default class App extends React.Component {
    render() {
        return (
            <main>
                <Nav/>
                <Search/>
            </main>
        );
    }
}