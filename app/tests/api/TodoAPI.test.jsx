var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array',  () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    if('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null); // this will fail
    });
  });

  // describe('getTodos', () => {
  //
  // });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    }, {
      id: 2,
      text: 'Other text here',
      completed: false
    }, {
      id: 3,
      text: 'Some text',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return non completed todos if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });
  });


})
