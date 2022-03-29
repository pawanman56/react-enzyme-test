import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './ToDoList';

describe('TodoList component', () => {
  describe('when provided with an empty array of tasks', () => {
    it('contains an empty <ul> element', () => {
      const todoList = shallow(<TodoList tasks={[]}/>);
      expect(todoList.contains(<ul/>)).toBe(true);
    });

    it('does not contain any <li> elements', () => {
      const todoList = shallow(<TodoList tasks={[]}/>)
      expect(todoList.find('li').length).toEqual(0);
    });
  });

  describe('when provided with an array of tasks', () => {
    it('contains a matching number of <li> elements', () => {
      const tasks = ['Wash the dishes', 'Make the bed', 'Brush your teeth'];
      const todoList = shallow(<TodoList tasks={tasks}/>);
      expect(todoList.find('li').length).toEqual(tasks.length);
    });
  });
});
