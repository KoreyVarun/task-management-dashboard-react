import React from 'react';
import StatusIndicator from './StatusIndicator';

function TaskCard({ task, onDelete, onEdit }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Todo': return 'gray';
      case 'In Progress': return 'orange';
      case 'Done': return 'green';
      default: return 'black';
    }
  };

  return (
    <div className="task-card" style={{ borderLeft: `5px solid ${getStatusColor(task.status)}` }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> <StatusIndicator status={task.status} /></p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Due:</strong> {task.dueDate}</p>
      <p><strong>Assigned to:</strong> {task.assignedUser}</p>
      <div style={{ display: 'flex', gap: '0.5em', marginTop: '0.5em' }}>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
