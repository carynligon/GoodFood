import React from 'react';
import {browserHistory} from 'react-router';

export default class PlaceCard extends React.Component{
    goToPlace() {
        browserHistory.push(`/place/${this.props.place.referralId}`);
    }
    render() {
        return (
            <li onClick={this.goToPlace.bind(this)}>
                <div>
                    <h4>{this.props.place.venue.name}</h4>
                    <p>{this.props.place.venue.location.address}</p>
                    <p>{this.props.place.venue.location.city}, {this.props.place.venue.location.state}</p>
                </div>
            </li>
        );
    }
}