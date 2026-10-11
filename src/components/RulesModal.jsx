import React from 'react';

export default function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <h3>CÓMO JUGAR</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="rule-item">
          <div className="rule-icon">1</div>
          <div className="rule-desc">
            <strong>Lee la petición del cliente</strong>
            <p>Cada cliente viene con una ocasión y vibra específica (ej: concierto grunge, café tierno, fiesta Y2K).</p>
          </div>
        </div>

        <div className="rule-item">
          <div className="rule-icon">2</div>
          <div className="rule-desc">
            <strong>Arma el outfit completo en 30s</strong>
            <p>Arrastra o toca 1 Top, 1 Bottom y 1 Accesorio hacia el maniquí. Puedes desequipar dando clic en la ✕ roja.</p>
          </div>
        </div>

        <div className="rule-item">
          <div className="rule-icon">3</div>
          <div className="rule-desc">
            <strong>Sistema de puntuación</strong>
            <p>
              • <strong>+100 pts</strong> por cada prenda que combine con los tags solicitados.<br />
              • <strong>+50 pts</strong> de bono combo si las 3 prendas encajan con el vibe.<br />
              • <strong>+5 pts</strong> por cada segundo restante en el reloj.<br />
              • <strong>-30 pts</strong> si los colores chocan o desentonan.
            </p>
          </div>
        </div>

        <div className="rule-item">
          <div className="rule-icon">4</div>
          <div className="rule-desc">
            <strong>5 clientes por sesión</strong>
            <p>Supera a los 5 clientes para desbloquear tu título de estilista y guardar tu mejor récord.</p>
          </div>
        </div>

        <button
          className="btn btn-burgundy"
          onClick={onClose}
          style={{ width: '100%', marginTop: '10px' }}
        >
          ¡ENTENDIDO, A CREAR!
        </button>
      </div>
    </div>
  );
}
