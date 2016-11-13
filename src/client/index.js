import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import throttle from 'lodash/throttle'
import './theme/index.scss';

const localStorageStore = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {};

const store = configureStore(localStorageStore);

store.subscribe(throttle( () => {
	console.log('Store updated, saving to local storage');
	try {
		localStorage.setItem('store', JSON.stringify(store.getState()));	
	} catch (err) {
		console.log('There was a problem saving state in local storage');
	}
}, 500));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
