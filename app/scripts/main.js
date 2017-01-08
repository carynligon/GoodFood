import $ from 'jquery';
import ReactDOM from 'react-dom';

import Router from './router';
import settings from './settings';
import store from './store';

if (localStorage.getItem('token')) {
    store.session.set({token: localStorage.getItem('token')});
}

$(document).ajaxSend((evt, xhr, opts) => {
    console.log(opts)
    if (opts.url.indexOf('backendless') !== -1) {
        xhr.setRequestHeader('application-id', settings.appId);
        xhr.setRequestHeader('secret-key', settings.secret);
        xhr.setRequestHeader('application-type', 'REST');
        xhr.setRequestHeader('content-type', 'application/json');
        if (localStorage.getItem('token')) {
            xhr.setRequestHeader('user-token', localStorage.getItem('token'));
            store.session.set({token: localStorage.getItem('token')});
        }
    }
});

ReactDOM.render(Router, document.getElementById('container'));