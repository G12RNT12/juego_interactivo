import React, { useState } from 'react';
import { sound } from '../utils/sound';

export default function Mannequin({
  outfit,
  onDropPiece,
  onUnequip,
  onClear,
  onSubmit,
  isShaking,
  onSlotClick
}) {
  const [dragOverSlot, setDragOverSlot] = useState(null);

  const handleDragOver = (e, slot) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverSlot(slot);
  };

  const handleDragLeave = (e, slot) => {
    if (dragOverSlot === slot) {
      setDragOverSlot(null);
    }
  };

  const handleDrop = (e, slot) => {
    e.preventDefault();
    setDragOverSlot(null);
    const pieceId = e.dataTransfer.getData('text/plain');
    onDropPiece(pieceId, slot);
  };

  return (
    <div className={`mannequin-panel ${isShaking ? 'shake-anim' : ''}`}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="brand-badge" style={{ background: 'var(--ink)' }}>MANIQUÍ</span>
        <button
          className="btn btn-outline"
          onClick={() => {
            sound.click();
            onClear();
          }}
          style={{ padding: '4px 10px', fontSize: '11px' }}
        >
          Limpiar
        </button>
      </div>

      <div className="mannequin-stage">
        {/* Silhouette Mannequin */}
        <svg className="mannequin-base-svg" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="35" r="18" fill="#161616" />
          <path d="M75,65 C85,60 115,60 125,65 C135,70 145,95 145,130 C135,145 125,175 120,185 L80,185 C75,175 65,145 55,130 C55,95 65,70 75,65 Z" fill="#161616" />
          <path d="M80,185 L120,185 L130,290 L105,290 L100,200 L95,290 L70,290 Z" fill="#161616" />
        </svg>

        {/* 1. Slot Accesorios */}
        <div
          className={`slot-container slot-acc ${outfit.acc ? 'filled' : ''} ${dragOverSlot === 'acc' ? 'drag-over' : ''}`}
          onDragOver={(e) => handleDragOver(e, 'acc')}
          onDragLeave={(e) => handleDragLeave(e, 'acc')}
          onDrop={(e) => handleDrop(e, 'acc')}
          onClick={() => onSlotClick('acc')}
        >
          {outfit.acc ? (
            <div className="slot-content">
              <div className="equipped-piece">
                {outfit.acc.renderSvg()}
              </div>
              <button
                className="slot-remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onUnequip('acc');
                }}
                title="Quitar"
              >
                ✕
              </button>
            </div>
          ) : (
            <span className="slot-label">Accesorios</span>
          )}
        </div>

        {/* 2. Slot Top */}
        <div
          className={`slot-container slot-top ${outfit.top ? 'filled' : ''} ${dragOverSlot === 'top' ? 'drag-over' : ''}`}
          onDragOver={(e) => handleDragOver(e, 'top')}
          onDragLeave={(e) => handleDragLeave(e, 'top')}
          onDrop={(e) => handleDrop(e, 'top')}
          onClick={() => onSlotClick('top')}
        >
          {outfit.top ? (
            <div className="slot-content">
              <div className="equipped-piece">
                {outfit.top.renderSvg()}
              </div>
              <button
                className="slot-remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onUnequip('top');
                }}
                title="Quitar"
              >
                ✕
              </button>
            </div>
          ) : (
            <span className="slot-label">Prenda Superior</span>
          )}
        </div>

        {/* 3. Slot Bottom */}
        <div
          className={`slot-container slot-bottom ${outfit.bottom ? 'filled' : ''} ${dragOverSlot === 'bottom' ? 'drag-over' : ''}`}
          onDragOver={(e) => handleDragOver(e, 'bottom')}
          onDragLeave={(e) => handleDragLeave(e, 'bottom')}
          onDrop={(e) => handleDrop(e, 'bottom')}
          onClick={() => onSlotClick('bottom')}
        >
          {outfit.bottom ? (
            <div className="slot-content">
              <div className="equipped-piece">
                {outfit.bottom.renderSvg()}
              </div>
              <button
                className="slot-remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onUnequip('bottom');
                }}
                title="Quitar"
              >
                ✕
              </button>
            </div>
          ) : (
            <span className="slot-label">Prenda Inferior</span>
          )}
        </div>
      </div>

      <div className="mannequin-actions">
        <button className="btn btn-submit" onClick={onSubmit}>
          ✨ ¡LISTO!
        </button>
      </div>
    </div>
  );
}
