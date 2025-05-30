import React, { useEffect, useState } from 'react';

function TaskForm({ onAdd, onUpdate, taskToEdit }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Todo',
    priority: 'Low',
    dueDate: '',
    assignedUser: '',
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate) {
      alert('Title and Due Date are required!');
      return;
    }

    if (taskToEdit) {
      onUpdate(task);
    } else {
      onAdd(task);
    }

    setTask({
      title: '',
      description: '',
      status: 'Todo',
      priority: 'Low',
      dueDate: '',
      assignedUser: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Description" />
      <select name="status" value={task.status} onChange={handleChange}>
        <option>Todo</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <input name="assignedUser" value={task.assignedUser} onChange={handleChange} placeholder="Assigned To" />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
