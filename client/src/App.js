import React from 'react';
import logo from './logo.svg';
import './App.css';

// Component imports
import { TeamList } from './Components/TeamList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TeamList />
    </div>
  );
}

export default App;
