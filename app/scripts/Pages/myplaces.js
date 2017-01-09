import React from 'react';

import store from '../store';

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
                        <td>{place.Price}</td>
                    </tr>
                    )
            });
        }
        return (
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Place</th>
                            <th>Rank</th>
                            <th>Price</th>
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