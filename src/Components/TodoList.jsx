import React, { useMemo } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask }) {
  const renderedTasks = useMemo(() => {
    return tasks.map((task) => (
      <TodoItem key={task.id} task={task} onDelete={deleteTask} />
    ));
  }, [tasks, deleteTask]);

  return <div className="task-list">{renderedTasks}</div>;
}

export default TodoList;
