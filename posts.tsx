"use client"

import { GetServerSideProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
// import { Todo } from '../types/todo';
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


interface HomeProps {
  initialTodos: Todo[];
}

const Home = ({ initialTodos }: HomeProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = async () => {
    if (!newTitle.trim()) return;

    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: newTitle,
      userId: 1,
      completed: false,
    });

    const newTodo = res.data;
    newTodo.id = Math.floor(Math.random() * 10000); // JSONPlaceholder doesn’t return unique id

    setTodos([newTodo, ...todos]);
    setNewTitle('');
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const updated = { ...todo, completed: !todo.completed };
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updated);

    setTodos(todos.map((t) => (t.id === id ? updated : t)));
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Next.js Todo List</h1>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New Todo"
          className="flex-1 border px-2 py-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <div
              className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.title}
            </div>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const data: Todo[] = await res.json();

  return {
    props: {
      initialTodos: data,
    },
  };
};

export default Home;
