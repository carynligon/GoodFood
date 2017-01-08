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
            console.log(response)
            this.token = response['user-token']
            localStorage.setItem('token', response['user-token'])
            console.log(this)
            browserHistory.push('/');
          }
        });
    }
});