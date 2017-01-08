import Backbone from 'backbone';

import settings from '../settings';
import Result from '../Models/Result';

export default Backbone.Collection.extend({
    url: `https://api.foursquare.com/v2/venues/explore?near=austin&client_id=${settings.clientId}&client_secret=${settings.clientSecret}`,
    model: Result,
    search(query) {
        this.fetch({
            data: {query: query},
            success: (d) => {
                let results = d.models[0].get('response').groups[0].items;
                results.forEach((result) => {
                    this.add(result)
                });
            }
        });
    }
});