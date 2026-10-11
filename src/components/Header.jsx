import React from 'react';
import { BRAND_NAME } from '../constants/gameData';
import { sound } from '../utils/sound';

export default function Header({ soundEnabled, onToggleSound, onOpenRules, isInGame, onGoHome }) {
  return (
    <header>
      <div className="brand-wrap">
        <h1 
          className="brand-logo" 
          onClick={onGoHome}
          style={{ cursor: onGoHome ? 'pointer' : 'default' }}
          title={onGoHome ? "Ir al inicio" : ""}
        >
          {BRAND_NAME}
        </h1>
        <span className="brand-badge">LIMA</span>
        <span className="brand-creator">@grace.magallanes</span>
      </div>
      <div className="header-actions">
        {isInGame && (
          <button
            className="btn btn-outline"
            onClick={() => {
              sound.click();
              onGoHome();
            }}
            style={{ padding: '8px 14px', fontSize: '12px' }}
            title="Volver al menú principal"
          >
            🏠 Inicio
          </button>
        )}
        <button
          className="btn btn-outline btn-icon"
          onClick={() => {
            sound.click();
            onToggleSound();
          }}
          title={soundEnabled ? "Silenciar" : "Activar sonido"}
          aria-label="Sonido"
        >
          <span>{soundEnabled ? "🔊" : "🔇"}</span>
        </button>
        <button
          className="btn btn-outline btn-icon"
          onClick={() => {
            sound.click();
            onOpenRules();
          }}
          title="Instrucciones"
          aria-label="Instrucciones"
        >
          ❔
        </button>
      </div>
    </header>
  );
}
