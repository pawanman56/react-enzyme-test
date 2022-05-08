import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList.component.js';
import axios from 'axios';

/* describe('TodoList component', () => {
 *   describe('when provided with an empty array of tasks', () => {
 *     it('contains an empty <ul> element', () => {
 *       const todoList = shallow(<TodoList tasks={[]}/>);
 *       expect(todoList.contains(<ul/>)).toBe(true);
 *     });
 *
 *     it('does not contain any <li> elements', () => {
 *       const todoList = shallow(<TodoList tasks={[]}/>)
 *       expect(todoList.find('li').length).toEqual(0);
 *     });
 *   });
 *
 *   describe('when provided with an array of tasks', () => {
 *     it('contains a matching number of <li> elements', () => {
 *       const tasks = ['Wash the dishes', 'Make the bed', 'Brush your teeth'];
 *       const todoList = shallow(<TodoList tasks={tasks}/>);
 *       expect(todoList.find('li').length).toEqual(tasks.length);
 *     });
 *   });
 * }); */

/* describe('TodoList component', () => {
 *   describe('when provided with an array of tasks',() => {
 *     it('passes them to the Task component', () => {
 *       const tasks = [
 *         { id: 0, name: 'Wash the dishes' },
 *         { id: 1, name: 'Make the bed' }
 *       ];
 *       const todoListInstance = mount(<TodoList tasks={tasks}/>);
 *
 *       todoListInstance.find('Task').forEach(taskInstance => {
 *         const taskProps = taskInstance.props();
 *         const matchingTask = tasks.find(task => task.id === taskProps.id);
 *
 *         expect(taskProps.name).toBe(matchingTask.name);
 *       });
 *     });
 *   });
 * }); */

jest.mock('axios');

describe('TodoList component', () => {
  describe('When rendered', () => {
    it('should fetch a list of tasks', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const todoListInstance = shallow(<TodoList/>);

      expect(getSpy).toBeCalled();
    });
  });
});
