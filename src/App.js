import { useState, useCallback } from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CirclePicker } from 'react-color';
import { useIdleTimer } from 'react-idle-timer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [headerColor, setHeaderColor] = useState('#000000');

  const handleOnIdle = useCallback(() => {
    toast.info('Are you still with us?');
  }, []);

  const idleTimer = useIdleTimer({
    timeout: 5000,
    onIdle: handleOnIdle,
  });

  const handleChangeColor = (color) => {
    setHeaderColor(color.hex);
  };

  const notifyAdd = useCallback((taskText) => {
    toast.success(`Task "${taskText}" added!`);
  }, []);

  const notifyDelete = useCallback((taskText) => {
    toast.error(`Task "${taskText}" deleted!`);
  }, []);

  const addTask = useCallback(() => {
    if (input) {
      notifyAdd(input);
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  }, [input, tasks, notifyAdd]);

  const deleteTask = useCallback(
    (id) => {
      const task = tasks.find((t) => t.id === id);
      if (task) {
        notifyDelete(task.text);
      }
      setTasks(tasks.filter((t) => t.id !== id));
    },
    [tasks, notifyDelete]
  );

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="app">
      <h1 style={{ color: headerColor }}>Todo List</h1>
      <CirclePicker color={headerColor} onChangeComplete={handleChangeColor} />
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add new task"
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
      <ToastContainer />
    </div>
  );
}

export default App;
