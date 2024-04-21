import React from 'react';

const TodoItem = React.memo(({ task, onDelete }) => {
  return (
    <div className="task-item">
      <span className="task-text">{task.text}</span>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
});

export default TodoItem;
