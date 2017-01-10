import React from 'react';
import {browserHistory} from 'react-router';

import store from '../store';
import PlaceCard from '../Components/placecard';

export default class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state= {data: []};
    }
    handleSearch(e) {
        e.preventDefault();
        store.results.search(this.refs.query.value);
    }
    addPlaces() {
        this.setState({data: store.results.toJSON()});
    }
    componentDidMount() {
        store.results.on('update', this.addPlaces.bind(this));
    }
    componentWillUnMount() {
        store.results.off('update', this.addPlaces.bind(this));
    }
    render() {
        let places;
        if (this.state.data) {
            let filtered = this.state.data.filter((place) => {
                return place.venue
            });
            places = filtered.map((place,i) => {
                return (
                    <PlaceCard place={place} key={i}/>
                    )
            })
        }
        return (
            <div className="search-wrapper">
                <form className="search-form" onSubmit={this.handleSearch.bind(this)}>
                    <input type="text" name="query" placeholder="search places..." ref="query"/>
                    <input type="submit" value="search" name="submit"/>
                </form>
                <ul className="results-list">
                        {places}
                </ul>
            </div>
        );
    }
}