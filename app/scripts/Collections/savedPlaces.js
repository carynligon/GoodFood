import Backbone from 'backbone';

import SavedPlace from '../Models/savedPlace';

export default Backbone.Collection.extend({
   url: 'https://api.backendless.com/v1/data/Places',
   model: SavedPlace,
   addPlace(model, rank, recommendations) {
        this.create({
            name: model.venue.name,
            genre: model.venue.categories[0].name,
            rank: rank,
            recommendations: recommendations,
            price: model.venue.price.tier
        }, {
            success: (d) => console.log(d)
        });
   }
});