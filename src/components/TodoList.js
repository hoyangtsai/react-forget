import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

import styles from './TodoList.module.css';

const initialTodos = () => [
  {
    id: 1,
    text: "memo",
    done: false
  },
  {
    id: 2,
    text: "useCallback",
    done: false
  },
  {
    id: 3,
    text: "useMemo",
    done: false
  }
];

function getUpdate(todos, todo) {
  return todos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t));
}

function getFiltered(todos, visibility) {
  if (visibility === 'all') return todos;

  return todos.filter((t) => visibility === 'active' ? !t.done : t.done);
}

export default function TodoList({ visibility, themeColor }) {
  const [todos, setTodos] = useState(initialTodos);

  const handleChange = todo => setTodos((todos) => getUpdate(todos, todo));

  const filtered = getFiltered(todos, visibility);

  return (
    <>
      <ul className={styles.todoList}>
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} id={todo.id} />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} themeColor={themeColor} />
    </>
  )
}

