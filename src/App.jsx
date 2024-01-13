import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import GameInterface from './components/GameInterface'; // Adjust the import path as needed

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <LandingPage onStartGame={startGame} />
      ) : (
        <GameInterface />
      )}
    </div>
  );
}

export default App;