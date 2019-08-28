import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Firebase, { FirebaseContext } from './components/Firebase';
import App from './App';

ReactDOM.render(  
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
