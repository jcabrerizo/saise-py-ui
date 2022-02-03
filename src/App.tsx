import React from 'react';
import './App.css';
import Game from './components/Game';
import NewGame from './components/NewGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>💩 Saise 💩</h1>
      </header>
      <NewGame/>
      <Game/>
    </div>
  );
}

export default App;
