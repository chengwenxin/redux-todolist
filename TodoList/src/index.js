import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './components/App';
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store =createStore(todoApp);
ReactDOM.render(
<Provider store={store}>
   <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
