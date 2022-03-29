import React from 'react';

const TodoList = (props) => {
  return (
    <ul>
      {
        props.tasks.map((taskName, index) =>
          <li key={ index }>{ taskName }</li>
        )
      }
    </ul>
  )
};

export default TodoList;
