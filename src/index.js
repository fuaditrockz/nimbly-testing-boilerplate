import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store'
import Firebase, { FirebaseContext } from './components/Firebase';
import App from './App';

ReactDOM.render(  
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
  </Provider>,
  document.getElementById('root')
);
