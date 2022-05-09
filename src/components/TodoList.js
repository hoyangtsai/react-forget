import React, { useState, useCallback } from "react";
import styles from "./TodoList.module.css";
import UnmemorizedTodo from "./Todo";
import AddTodo from "./AddTodo";

const initialTodos = () => [
  {
    id: 1,
    name: "memo",
    isDone: false
  },
  {
    id: 2,
    name: "useCallback",
    isDone: false
  },
  {
    id: 3,
    name: "useMemo",
    isDone: false
  }
];

function getUpdate(todos, todo) {
  return todos.map((t) => (t.id === todo.id ? { ...t, isDone: !t.isDone } : t));
}

const Todo = React.memo(UnmemorizedTodo);

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const handleChange = useCallback(
    todo => setTodos((todos) => getUpdate(todos, todo)), []
  );

  return (
    <div className={styles.todoList}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} id={todo.id} />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
