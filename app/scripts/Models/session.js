import $ from 'jquery';
import Backbone from 'backbone';
import {browserHistory} from 'react-router';

import settings from '../settings';

export default Backbone.Model.extend({
    token: '',
    login(login, password) {
        $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/users/login',
          contentType:'application/json',
          data:JSON.stringify({login, password}),
          success:(response)=>{
            this.token = response['user-token']
            localStorage.setItem('token', response['user-token']);
            localStorage.setItem('id', response['objectId']);
            browserHistory.push('/');
          }
        });
    },
    logout() {
        $.ajax({
            url: 'https://api.backendless.com/v1/users/logout',
            success: (d) => {
                localStorage.clear();
                browserHistory.push('/login');
            }
        });
    }
});