import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxStore from './ReduxStore';

ReduxStore.subscribe( () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

ReduxStore.dispatch({type: null}); // this triggers the first render

//ReactDOM.render(<App />, document.getElementById('root'));
