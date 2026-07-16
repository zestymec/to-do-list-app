'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'todo-list-data';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showError, setShowError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch {
        setTodos([]);
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, loaded]);

  const addTodo = () => {
    const text = input.trim();
    if (!text) {
      setShowError(true);
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(),
      completedAt: null,
    };
    setTodos((prev) => [...prev, newTask]);
    setInput('');
    setShowError(false);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date().toLocaleString() : null,
            }
          : todo
      )
    );
  };

  const deleteTodo = (e, id) => {
    e.stopPropagation();
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full bg-[#0d1c3a] p-4 flex-grow">
      <div className="w-full max-w-[570px] bg-white mx-auto mt-20 p-6 rounded-2xl shadow-2xl">
        <div className="flex justify-center items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#0d1c3a] shrink-0">
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <path d="M8 12.5l2.5 2.5L16 9.5" />
          </svg>
          <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-[#0d1c3a]">TO-DO LIST APP</h1>
        </div>

        <div className="flex items-center justify-between bg-[rgba(136,135,135,0.75)] rounded-full pl-4 pr-1.5 py-1.5 mt-5 mb-2 focus-within:ring-2 focus-within:ring-[#4e085f]/40 transition-shadow">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowError(false);
            }}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add your task"
            className="flex-1 bg-transparent outline-none border-none text-gray-900 placeholder-gray-700 px-2"
          />
          <button
            onClick={addTodo}
            className="bg-[#ff8856] hover:bg-[#ff7440] transition-colors text-black font-medium rounded-full px-5 py-2 shrink-0 focus:outline-none"
          >
            Add
          </button>
        </div>

        {showError && <p className="text-red-500 text-sm mb-3 pl-2">You must write something!</p>}

        <ul className="list-none mt-4">
          {todos.length === 0 && (
            <li className="text-center text-gray-400 py-8 select-none">No tasks yet</li>
          )}

          {todos.map((todo) => (
            <li key={todo.id} className="flex flex-col py-3 border-b border-gray-100 relative">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium">{todo.text}</span>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      todo.completed ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {todo.completed ? 'Completed' : 'Complete'}
                  </button>
                </div>
                <button onClick={(e) => deleteTodo(e, todo.id)} className="text-gray-400 hover:text-red-500 text-xl px-2">×</button>
              </div>
              
              <div className="mt-1 text-[10px] text-gray-400 space-x-2">
                <span>Added: {todo.createdAt}</span>
                {todo.completed && <span>| Finished: {todo.completedAt}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}