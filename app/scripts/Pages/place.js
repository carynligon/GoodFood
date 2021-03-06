import $ from 'jquery';
import React from 'react';

import store from '../store';
import Nav from '../Components/nav';

export default class Place extends React.Component{
    constructor(props) {
        super(props);
        this.state = {place: store.results.get(this.props.params.id).toJSON()};
    }
    addPlace(e) {
        e.preventDefault();
        store.savedPlaces.addPlace(this.state.place, Number(this.refs.rank.value), this.refs.recommendations.value);
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
            <main className="place-page">
                <Nav/>
                <h2>{this.state.place.venue.name}</h2>
                <p className="geo-info">{this.state.place.venue.location.address}</p>
                <p className="geo-info">{this.state.place.venue.location.city}, {this.state.place.venue.location.state}</p>
                <p className="price">{dollars}</p>
                <form onSubmit={this.addPlace.bind(this)}>
                    <input type="number" min="1" max="5" ref="rank" placeholder="1"/>
                    <input type="text" placeholder="recommendations" ref="recommendations"/>
                    <input type="submit" value="add"/>
                </form>
            </main>
        )
    }
}