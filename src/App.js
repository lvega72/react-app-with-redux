import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm'
import UserTable from './UserTable'
import ReduxStore from './ReduxStore'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App using React & Redux!</p>
        <NameForm  reduxDispatch = {ReduxStore.dispatch}/>
        <UserTable reduxState = {ReduxStore.getState()}/>
      </header>
    </div>
  );
}

export default App;
