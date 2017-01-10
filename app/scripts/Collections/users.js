import Backbone from 'backbone';

import store from '../store';
import User from '../Models/User';

export default Backbone.Collection.extend({
    url: 'https://api.backendless.com/v1/users/register',
    model: User,
    register(email, password) {
        this.create({email, password}, {
            success: (d) => {
                store.session.login(email, password)
            }
        })
    }
});