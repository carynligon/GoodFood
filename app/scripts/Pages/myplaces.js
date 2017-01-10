import _ from 'underscore';
import React from 'react';

import store from '../store';
import Nav from '../Components/nav';

export default class MyPlaces extends React.Component{
    constructor(props) {
        super(props);
        store.savedPlaces.fetch();
        this.state={};
    }
    updatePlaces() {
        let userId = localStorage.getItem('id');
        let places = _.where(store.savedPlaces.models[0].get('data'), {ownderId: userId});
        this.setState({places: places});
    }
    componentDidMount() {
        store.savedPlaces.on('update', this.updatePlaces.bind(this));
    }
    componentWillUnmount() {
        store.savedPlaces.off('update', this.updatePlaces.bind(this));
    }
    render() {
        let places;
        console.log(this.state)
        if (this.state.places) {
            places = this.state.places.map((place,i) => {
                return (
                    <tr key={i}>
                        <td>{place.Name}</td>
                        <td>{place.Rank}</td>
                        <td>{place.Genre}</td>
                        <td>{place.Price}</td>
                        <td>{place.Recommendations}</td>
                    </tr>
                    )
            });
        }
        return (
            <main>
                <Nav/>
                <table>
                    <thead>
                        <tr>
                            <th>Place</th>
                            <th>Rank</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Recommendations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {places}
                    </tbody>
                </table>
            </main>
        );
    }
}