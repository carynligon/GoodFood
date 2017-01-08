import $ from 'jquery';
import React from 'react';

import store from '../store';

export default class Place extends React.Component{
    constructor(props) {
        super(props);
        this.state = {place: store.results.get(this.props.params.id).toJSON()};
    }
    render() {
        let dollars;
        if (this.state.place.venue.price.tier === 3) {
            dollars = '$$$'
        } else if (this.state.place.venue.price.tier === 2) {
            dollars = '$$'
        } else if (this.state.place.venue.price.tier === 1) {
            dollars = '$'
        }
        return(
            <main>
                <h2>{this.state.place.venue.name}</h2>
                <p>{this.state.place.venue.location.address}</p>
                <p>{this.state.place.venue.location.city}, {this.state.place.venue.location.state}</p>
                <p>{dollars}</p>
                <button className="add-place">Add</button>
            </main>
        )
    }
}