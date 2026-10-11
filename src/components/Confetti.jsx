import React, { useEffect, useState } from 'react';

const COLORS = ['#6E1A2B', '#161616', '#6B7F99', '#FFE885', '#F4F1EC'];

export default function Confetti({ active }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }

    const items = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: Math.random() * window.innerWidth,
      dx: `${(Math.random() - 0.5) * 200}px`,
      dy: `${Math.random() * 400 + 300}px`,
      rot: `${Math.random() * 720 - 360}deg`,
      bg: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 8 + 6,
      isCircle: Math.random() > 0.5
    }));

    setPieces(items);

    const timer = setTimeout(() => {
      setPieces([]);
    }, 1600);

    return () => clearTimeout(timer);
  }, [active]);

  if (!pieces.length) return null;

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}px`,
            top: '15%',
            backgroundColor: p.bg,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.isCircle ? '50%' : '2px',
            '--dx': p.dx,
            '--dy': p.dy,
            '--rot': p.rot
          }}
        />
      ))}
    </div>
  );
}
