import React from 'react';
import { sound } from '../utils/sound';

export default function StartScreen({ highScore, onStartGame, onOpenRules }) {
  return (
    <section className="screen screen-start">
      <div className="hero-card">
        <span className="hero-sticker">COLECCIÓN 2026 ★</span>
        <h2 className="hero-title">ARMA EL <span>LOOK</span></h2>
        <p className="hero-subtitle">
          Viste a los clientes de MUSE STUDIO según su vibe antes de que acabe el tiempo. Streetwear, estética Y2K y estilo editorial.
        </p>

        <div className="creator-credit">
          ✨ Dirección Creativa por <strong>@grace.magallanes</strong>
        </div>

        <div className="hero-buttons">
          <button
            className="btn btn-burgundy"
            onClick={() => {
              sound.click();
              onStartGame();
            }}
            style={{ fontSize: '17px', padding: '16px' }}
          >
            ⚡ ¡JUGAR DE UNA!
          </button>
          <button
            className="btn btn-outline"
            onClick={() => {
              sound.click();
              onOpenRules();
            }}
          >
            CÓMO JUGAR
          </button>
        </div>

        <div className="best-score-badge">
          🏆 Récord actual: <span className="mono">{highScore} pts</span>
        </div>
      </div>
    </section>
  );
}
