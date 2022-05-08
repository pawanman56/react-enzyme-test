import React, { Component } from 'react';
import Task from './Task/Task';
import axios from 'axios';

class TodoList extends Component {
  state = {
    tasks: []
  }

  componentDidMount () {
    return axios.get(`${apiUrl}/tasks`)
      .then(tasksResponse => {
        this.setState({ tasks: tasksResponse.data })
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {
            this.state.tasks.map(task =>
              <task key={ task.id } id={ task.id } name={ task.name } />
            )
          }
        </ul>
      </div>
    )
  }
};

export default TodoList;
