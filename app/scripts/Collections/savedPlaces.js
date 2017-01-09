import Backbone from 'backbone';

import SavedPlace from '../Models/savedPlace';

export default Backbone.Collection.extend({
   url: 'https://api.backendless.com/v1/data/Places',
   model: SavedPlace,
   addPlace(model, rank) {
        this.create({
            name: model.venue.name,
            rank: rank,
            price: model.venue.price.tier
        }, {
            success: (d) => console.log(d)
        });
   }
});