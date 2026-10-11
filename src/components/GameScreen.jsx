import React, { useState, useEffect, useRef } from 'react';
import TimerCircle from './TimerCircle';
import ClientCard from './ClientCard';
import Mannequin from './Mannequin';
import Wardrobe from './Wardrobe';
import FeedbackModal from './FeedbackModal';
import {
  TIME_LIMIT_SECONDS,
  TOTAL_CLIENTS_PER_RUN,
  COLOR_CLASH_PAIRS,
  WARDROBE
} from '../constants/gameData';
import { sound } from '../utils/sound';

export default function GameScreen({
  clients,
  onFinishGame,
  onShowToast,
  onTriggerConfetti,
  onGoHome
}) {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [scorePopping, setScorePopping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const [outfit, setOutfit] = useState({ top: null, bottom: null, acc: null });
  const [isShaking, setIsShaking] = useState(false);
  const [isClientExiting, setIsClientExiting] = useState(false);
  const [wardrobePieces, setWardrobePieces] = useState(WARDROBE);
  const [filter, setFilter] = useState('all');
  const [feedback, setFeedback] = useState(null);

  const currentClient = clients[currentRoundIndex] || null;
  const timerRef = useRef(null);

  // Timer loop
  useEffect(() => {
    if (feedback !== null) {
      clearInterval(timerRef.current);
      return;
    }

    setTimeLeft(TIME_LIMIT_SECONDS);
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        if (prev <= 6 && prev > 1) {
          sound.tick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentRoundIndex, feedback]);

  const addScore = (points) => {
    setScore((prev) => prev + points);
    setScorePopping(true);
    setTimeout(() => setScorePopping(false), 250);
  };

  const checkColorClash = (pieces) => {
    const colors = pieces.map((p) => p.color);
    for (let i = 0; i < colors.length; i++) {
      for (let j = i + 1; j < colors.length; j++) {
        const c1 = colors[i];
        const c2 = colors[j];
        const isClash = COLOR_CLASH_PAIRS.some(
          ([a, b]) => (a === c1 && b === c2) || (a === c2 && b === c1)
        );
        if (isClash) return true;
      }
    }
    return false;
  };

  const handleEquipPiece = (piece) => {
    setOutfit((prev) => ({
      ...prev,
      [piece.slot]: piece
    }));
    sound.equip();
  };

  const handleUnequipPiece = (slot) => {
    setOutfit((prev) => ({
      ...prev,
      [slot]: null
    }));
    sound.unequip();
  };

  const handleClearOutfit = () => {
    setOutfit({ top: null, bottom: null, acc: null });
  };

  const handleDropPiece = (pieceId, targetSlot) => {
    const piece = wardrobePieces.find((p) => p.id === pieceId);
    if (!piece) return;

    if (piece.slot === targetSlot) {
      handleEquipPiece(piece);
    } else {
      sound.error();
      onShowToast(`¡Esa prenda va en ${piece.slot.toUpperCase()}!`);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
    }
  };

  const handleSlotClick = (slot) => {
    if (!outfit[slot]) {
      setFilter(slot);
    }
  };

  const handleShuffleWardrobe = () => {
    setWardrobePieces((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const evaluateOutfit = (force = false) => {
    const equipped = [outfit.top, outfit.bottom, outfit.acc].filter(Boolean);

    if (equipped.length < 3 && !force) {
      setIsShaking(true);
      sound.error();
      onShowToast("¡Te falta completar el look! (Top, Bottom y Accesorio)");
      setTimeout(() => setIsShaking(false), 400);
      return;
    }

    clearInterval(timerRef.current);

    const client = currentClient;
    let pieceScore = 0;
    let matchedCount = 0;
    const breakdownRows = [];

    // 1. Tag matches (+100 each)
    equipped.forEach((p) => {
      const hasMatch = p.tags.some((t) => client.tags.includes(t));
      if (hasMatch) {
        pieceScore += 100;
        matchedCount++;
        breakdownRows.push({
          label: `${p.name} (Vibe acertado)`,
          pts: "+100",
          isPos: true
        });
      } else {
        breakdownRows.push({
          label: `${p.name} (Fuera de estilo)`,
          pts: "0",
          isPos: false
        });
      }
    });

    // 2. Combo bonus (+50 if all 3 match)
    let comboBonus = 0;
    if (matchedCount === 3) {
      comboBonus = 50;
      breakdownRows.push({
        label: "★ Combo Look Completo",
        pts: "+50",
        isPos: true
      });
    }

    // 3. Time bonus (+5 per remaining second)
    const timeBonus = Math.max(0, timeLeft * 5);
    if (timeBonus > 0) {
      breakdownRows.push({
        label: `⚡ Velocidad (${timeLeft}s restantes)`,
        pts: `+${timeBonus}`,
        isPos: true
      });
    }

    // 4. Color clash (-30)
    let clashPenalty = 0;
    if (equipped.length >= 2 && checkColorClash(equipped)) {
      clashPenalty = 30;
      breakdownRows.push({
        label: "⚠️ Colores en conflicto",
        pts: "-30",
        isPos: false
      });
    }

    const roundTotal = Math.max(0, pieceScore + comboBonus + timeBonus - clashPenalty);
    addScore(roundTotal);

    let stars = "★☆☆";
    let phrase = "No es mi estilo 😕";
    let emoji = "😕";

    if (matchedCount === 3 && clashPenalty === 0) {
      stars = "★★★";
      phrase = "¡Me encanta! 😍 ¡Qué chimba!";
      emoji = "😍";
      sound.starBurst();
      onTriggerConfetti();
    } else if (matchedCount >= 2 || roundTotal >= 180) {
      stars = "★★☆";
      phrase = "Mmm, está bien 🙂 Aguanta";
      emoji = "🙂";
      sound.success();
    } else {
      sound.error();
    }

    setFeedback({
      stars,
      phrase,
      emoji,
      breakdownRows,
      totalRoundPts: roundTotal
    });
  };

  const handleTimeOut = () => {
    sound.error();
    onShowToast("¡Se acabó el tiempo!");
    evaluateOutfit(true);
  };

  const handleNextClient = () => {
    setFeedback(null);
    handleClearOutfit();

    if (currentRoundIndex + 1 >= TOTAL_CLIENTS_PER_RUN) {
      onFinishGame(score);
    } else {
      setIsClientExiting(true);
      setTimeout(() => {
        setIsClientExiting(false);
        setCurrentRoundIndex((prev) => prev + 1);
      }, 350);
    }
  };

  return (
    <section className="screen screen-game">
      {/* HUD Bar */}
      <div className="hud-bar">
        <button
          className="btn btn-outline"
          onClick={() => {
            sound.click();
            onGoHome();
          }}
          style={{ padding: '6px 12px', fontSize: '12px' }}
          title="Volver a la pantalla principal"
        >
          ← Salir
        </button>

        <div className="hud-item">
          <span className="hud-label">Puntaje</span>
          <span className={`hud-val mono score-counter ${scorePopping ? 'score-pop' : ''}`}>
            {score}
          </span>
        </div>

        <TimerCircle timeLeft={timeLeft} />

        <div className="hud-item" style={{ textAlign: 'right' }}>
          <span className="hud-label">Cliente</span>
          <span className="hud-val mono">
            {currentRoundIndex + 1}/{TOTAL_CLIENTS_PER_RUN}
          </span>
        </div>
      </div>

      {/* Client Area */}
      <ClientCard client={currentClient} isExiting={isClientExiting} />

      {/* Main Play Area */}
      <div className="game-board">
        <Mannequin
          outfit={outfit}
          onDropPiece={handleDropPiece}
          onUnequip={handleUnequipPiece}
          onClear={handleClearOutfit}
          onSubmit={() => evaluateOutfit(false)}
          isShaking={isShaking}
          onSlotClick={handleSlotClick}
        />

        <Wardrobe
          pieces={wardrobePieces}
          outfit={outfit}
          filter={filter}
          onFilterChange={setFilter}
          onShuffle={handleShuffleWardrobe}
          onEquip={handleEquipPiece}
        />
      </div>

      <FeedbackModal
        feedback={feedback}
        onNextClient={handleNextClient}
      />
    </section>
  );
}
