/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import throttle from 'lodash/throttle'
import './theme/index.scss';

// Initialize the store from local storage if any data is stored there
const localStorageStore = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {};

// Initialize store
const store = configureStore(localStorageStore);

// Set a listener to update local storage on every store update
// Throttle listener to limit calls to local storage to once per 500 milliseconds
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
