import React from 'react';

import store from '../store';

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
    addPlace() {
    }
    componentDidMount() {
        store.results.on('update', this.addPlaces.bind(this));
    }
    render() {
        console.log(this.state);
        let places;
        if (this.state.data) {
            let filtered = this.state.data.filter((place) => {
                return place.venue
            });
            places = filtered.map((place,i) => {
                return (
                    <li key={i} onClick={this.addPlace.bind(this)}>
                        <h4>{place.venue.name}</h4>
                        <p>{place.venue.location.address}</p>
                        <p>{place.venue.location.city}, {place.venue.location.state}</p>
                    </li>
                    )
            })
        }
        return (
            <form onSubmit={this.handleSearch.bind(this)}>
                <input type="text" name="query" placeholder="search places" ref="query"/>
                <input type="submit" value="search" name="submit"/>
                <ul className="results-list">
                    {places}
                </ul>
            </form>
        );
    }
}