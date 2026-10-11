import React from 'react';
import { TITLES, BRAND_NAME } from '../constants/gameData';
import { sound } from '../utils/sound';

export default function ResultsScreen({ score, highScore, onPlayAgain, onShowToast }) {
  let tier = TITLES.ROOKIE;
  if (score >= 1100) {
    tier = TITLES.ICON;
  } else if (score >= 650) {
    tier = TITLES.FASHIONISTA;
  }

  const handleShare = () => {
    sound.click();
    const text = `✨ ¡Armé los looks de ${BRAND_NAME} (diseño por @grace.magallanes) y logré ${score} pts! Título: ${tier.title}. ¿Puedes superarme en la pasarela? 👗🔥`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        onShowToast("¡Resultado copiado al portapapeles! 📋");
      }).catch(() => {
        fallbackCopyText(text);
      });
    } else {
      fallbackCopyText(text);
    }
  };

  const fallbackCopyText = (text) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      onShowToast("¡Resultado copiado al portapapeles! 📋");
    } catch {
      onShowToast("No se pudo copiar automáticamente.");
    }
    document.body.removeChild(ta);
  };

  return (
    <section className="screen screen-results">
      <div className="results-card">
        <span className="results-badge">{tier.badge}</span>
        <h2 className="results-title">{tier.title}</h2>
        <p className="results-tagline">{tier.quote}</p>
        <div className="results-credit">★ Curaduría de Estilo: @grace.magallanes</div>

        <div className="results-score-box">
          <span className="hud-label">Puntaje Final</span>
          <div className="results-score-num mono">{score}</div>
          <div className="results-high-score">Récord personal: {highScore} pts</div>
        </div>

        <div className="results-actions">
          <button
            className="btn btn-burgundy"
            onClick={() => {
              sound.click();
              onPlayAgain();
            }}
            style={{ padding: '16px' }}
          >
            🔄 Jugar otra vez
          </button>
          <button
            className="btn btn-outline"
            onClick={handleShare}
            style={{ padding: '14px' }}
          >
            📋 Compartir resultado
          </button>
        </div>
      </div>
    </section>
  );
}
