import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import RulesModal from './components/RulesModal';
import Confetti from './components/Confetti';
import { BRAND_NAME, CLIENT_REQUESTS, TOTAL_CLIENTS_PER_RUN } from './constants/gameData';
import { sound } from './utils/sound';
import { loadHighScore, saveHighScore } from './utils/storage';

export default function App() {
  const [screen, setScreen] = useState('start'); // 'start' | 'game' | 'results'
  const [highScore, setHighScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [gameClients, setGameClients] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    setHighScore(loadHighScore());
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2400);
  };

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 1600);
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    triggerToast(nextState ? "Sonido activado 🔊" : "Sonido silenciado 🔇");
  };

  const handleStartGame = () => {
    const shuffled = [...CLIENT_REQUESTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, TOTAL_CLIENTS_PER_RUN);

    setGameClients(shuffled);
    setScreen('game');
  };

  const handleGoHome = () => {
    sound.click();
    setScreen('start');
  };

  const handleFinishGame = (score) => {
    setFinalScore(score);
    saveHighScore(score);
    setHighScore(loadHighScore());
    setScreen('results');
    if (score >= 1100) {
      triggerConfetti();
    }
  };

  return (
    <div className="app-container">
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenRules={() => setRulesOpen(true)}
        isInGame={screen === 'game'}
        onGoHome={handleGoHome}
      />

      {screen === 'start' && (
        <StartScreen
          highScore={highScore}
          onStartGame={handleStartGame}
          onOpenRules={() => setRulesOpen(true)}
        />
      )}

      {screen === 'game' && (
        <GameScreen
          clients={gameClients}
          onFinishGame={handleFinishGame}
          onShowToast={triggerToast}
          onTriggerConfetti={triggerConfetti}
          onGoHome={handleGoHome}
        />
      )}

      {screen === 'results' && (
        <ResultsScreen
          score={finalScore}
          highScore={highScore}
          onPlayAgain={handleStartGame}
          onShowToast={triggerToast}
        />
      )}

      <RulesModal
        isOpen={rulesOpen}
        onClose={() => setRulesOpen(false)}
      />

      <Confetti active={confettiActive} />

      <div className={`toast ${showToast ? 'show' : ''}`}>
        {toastMessage}
      </div>

      <footer className="app-footer">
        {BRAND_NAME} — Diseñado y Creado por <strong>@grace.magallanes</strong> • Lima 2026
      </footer>
    </div>
  );
}
