import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null); // reset form after editing
  };

  const startEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="app">
      <h1>Task Management Dashboard</h1>
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        taskToEdit={taskToEdit}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={startEditTask}
      />
    </div>
  );
}

export default App;
