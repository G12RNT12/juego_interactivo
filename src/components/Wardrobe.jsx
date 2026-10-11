import React from 'react';
import { sound } from '../utils/sound';

export default function Wardrobe({
  pieces,
  outfit,
  filter,
  onFilterChange,
  onShuffle,
  onEquip
}) {
  const filteredPieces = filter === 'all'
    ? pieces
    : pieces.filter(p => p.slot === filter);

  const getDotColor = (color) => {
    switch (color) {
      case 'white': return '#FFFFFF';
      case 'burgundy': return '#6E1A2B';
      case 'denim': return '#6B7F99';
      case 'gray': return '#D9D6D0';
      case 'beige': return '#EFEADF';
      default: return '#161616';
    }
  };

  return (
    <div className="wardrobe-panel">
      <div className="wardrobe-nav">
        <div className="wardrobe-tabs">
          <button
            className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => {
              sound.click();
              onFilterChange('all');
            }}
          >
            Todos
          </button>
          <button
            className={`tab-btn ${filter === 'top' ? 'active' : ''}`}
            onClick={() => {
              sound.click();
              onFilterChange('top');
            }}
          >
            Tops
          </button>
          <button
            className={`tab-btn ${filter === 'bottom' ? 'active' : ''}`}
            onClick={() => {
              sound.click();
              onFilterChange('bottom');
            }}
          >
            Bottoms
          </button>
          <button
            className={`tab-btn ${filter === 'acc' ? 'active' : ''}`}
            onClick={() => {
              sound.click();
              onFilterChange('acc');
            }}
          >
            Accesorios
          </button>
        </div>

        <button
          className="btn btn-outline"
          onClick={() => {
            sound.click();
            onShuffle();
          }}
          style={{ padding: '6px 14px', fontSize: '12px' }}
        >
          🔀 Mezclar
        </button>
      </div>

      <div className="wardrobe-grid">
        {filteredPieces.map((piece) => {
          const isEquipped = (
            outfit.top?.id === piece.id ||
            outfit.bottom?.id === piece.id ||
            outfit.acc?.id === piece.id
          );

          return (
            <div
              key={piece.id}
              className={`clothing-card ${isEquipped ? 'is-equipped' : ''}`}
              draggable={!isEquipped}
              onDragStart={(e) => {
                if (isEquipped) {
                  e.preventDefault();
                  return;
                }
                e.currentTarget.classList.add('grabbing');
                e.dataTransfer.setData('text/plain', piece.id);
                e.dataTransfer.effectAllowed = 'move';
              }}
              onDragEnd={(e) => {
                e.currentTarget.classList.remove('grabbing');
              }}
              onClick={() => {
                if (!isEquipped) {
                  onEquip(piece);
                }
              }}
            >
              <div
                className="card-color-dot"
                style={{ backgroundColor: getDotColor(piece.color) }}
              />
              <div className="card-svg-wrap">
                {piece.renderSvg()}
              </div>
              <span className="card-name">{piece.name}</span>
              <div className="card-tags">
                {piece.tags.map((t) => (
                  <span key={t} className="card-tag">#{t}</span>
                ))}
              </div>
              <span className="equip-hint">Toca para poner</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
