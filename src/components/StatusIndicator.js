import React from 'react';

const statusStyles = {
  'Todo': { color: '#888', icon: '⏳' },
  'In Progress': { color: '#f0ad4e', icon: '🚧' },
  'Done': { color: '#5cb85c', icon: '✅' },
};

function StatusIndicator({ status }) {
  const style = statusStyles[status] || { color: '#333', icon: '❓' };
  return (
    <span style={{ color: style.color, fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.3em' }}>
      <span>{style.icon}</span>
      <span>{status}</span>
    </span>
  );
}

export default StatusIndicator; 