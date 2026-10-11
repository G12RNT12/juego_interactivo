import React from 'react';
import { TIME_LIMIT_SECONDS } from '../constants/gameData';

export default function TimerCircle({ timeLeft }) {
  const CIRCUMFERENCE = 157.08; // 2 * PI * 25
  const progress = timeLeft / TIME_LIMIT_SECONDS;
  const offset = CIRCUMFERENCE * (1 - progress);
  const isDanger = timeLeft <= 5;

  return (
    <div className="timer-wrap">
      <svg className="timer-svg" viewBox="0 0 60 60">
        <circle className="timer-bg" cx="30" cy="30" r="25" />
        <circle
          className={`timer-progress ${isDanger ? 'timer-danger' : ''}`}
          cx="30"
          cy="30"
          r="25"
          style={{ strokeDashoffset: offset }}
        />
      </svg>
      <span className={`timer-text mono ${isDanger ? 'timer-danger-text' : ''}`}>
        {timeLeft}
      </span>
    </div>
  );
}
