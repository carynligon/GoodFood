import React from 'react';

import store from '../store';

export default class Search extends React.Component{
    handleSearch(e) {
        e.preventDefault();
        store.results.search(this.refs.query.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSearch.bind(this)}>
                <input type="text" name="query" placeholder="search places" ref="query"/>
                <input type="submit" value="search" name="submit"/>
            </form>
        );
    }
}