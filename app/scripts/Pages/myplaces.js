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
        this.setState({places: store.savedPlaces.toJSON()});
    }
    componentDidMount() {
        store.savedPlaces.on('update', this.updatePlaces.bind(this));
    }
    componentWillUnmount() {
        store.savedPlaces.off('update', this.updatePlaces.bind(this));
    }
    render() {
        let places;
        if (this.state.places) {
            places = this.state.places[0].data.map((place,i) => {
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