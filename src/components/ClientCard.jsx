import React from 'react';

export default function ClientCard({ client, isExiting }) {
  if (!client) return null;

  return (
    <div className="client-stage">
      <div 
        key={client.name + client.vibe}
        className={`client-card ${isExiting ? 'exit' : ''}`}
      >
        <div className="client-avatar-wrap">
          <div className="client-avatar">{client.avatar}</div>
          <div className="client-reaction-badge">✨</div>
        </div>
        <div className="client-info">
          <div className="client-header">
            <span className="client-name">{client.name}</span>
            <span className="client-count-pill">{client.vibe}</span>
          </div>
          <p className="client-bubble">"{client.request}"</p>
          <div className="client-tags">
            {client.tags.map(tag => (
              <span key={tag} className="tag-pill">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
