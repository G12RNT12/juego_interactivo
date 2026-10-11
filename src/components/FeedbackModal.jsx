import React from 'react';

export default function FeedbackModal({ feedback, onNextClient }) {
  if (!feedback) return null;

  return (
    <div className="modal-overlay" onClick={onNextClient}>
      <div className="feedback-card" onClick={(e) => e.stopPropagation()}>
        <div className="fb-avatar">{feedback.emoji}</div>
        <div className="fb-stars">{feedback.stars}</div>
        <h3 className="fb-phrase">"{feedback.phrase}"</h3>

        <div className="fb-breakdown">
          {feedback.breakdownRows.map((row, idx) => (
            <div key={idx} className="fb-breakdown-row">
              <span>{row.label}</span>
              <span className={`fb-pts ${row.isPos ? 'pos' : 'neg'}`}>{row.pts}</span>
            </div>
          ))}
          <div
            className="fb-breakdown-row"
            style={{
              marginTop: '6px',
              paddingTop: '6px',
              borderTop: '1px solid #CCC',
              fontWeight: 800
            }}
          >
            <span>Total Ronda</span>
            <span className="mono">{feedback.totalRoundPts} pts</span>
          </div>
        </div>

        <button className="btn btn-burgundy" onClick={onNextClient} style={{ width: '100%' }}>
          SIGUIENTE CLIENTE ➔
        </button>
      </div>
    </div>
  );
}
