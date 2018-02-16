import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
