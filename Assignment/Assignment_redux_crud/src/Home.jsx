import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './features/todo/todoSlice';

function Home() {
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, text: '' });

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),  // Simple unique id
        text: newTodo,
      };
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdateTodo = () => {
    if (editTodo.text.trim()) {
      dispatch(updateTodo(editTodo));
      setEditTodo({ id: null, text: '' });
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Add New Todo */}
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/* Update Todo */}
      {editTodo.id && (
        <div>
          <input
            type="text"
            value={editTodo.text}
            onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
            placeholder="Update todo"
          />
          <button onClick={handleUpdateTodo}>Update Todo</button>
        </div>
      )}

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => setEditTodo({id: todo.id, text: todo.text })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
