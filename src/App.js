import React, { useState, useCallback } from 'react';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = useCallback(() => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  }, [input, tasks]);

  const deleteTask = useCallback((id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }, [tasks]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add new task"
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">Add Task</button>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
