import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = React.memo(({ task, onDelete }) => {
  return (
    <div className="task-item">
      <span className="task-text">{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        <FaTrash />
      </button>
    </div>
  );
});

export default TodoItem;
