import React from 'react';
import Task from './Task/Task';

const TodoList = (props) => {
  return (
    <ul>
      {
        props.tasks.map(task =>
          <Task key={ task.id } id={ task.id } name={ task.name } />
        )
      }
    </ul>
  )
};

export default TodoList;
