import React, { useState, useCallback, useContext } from "react";
import styles from "./TodoList.module.css";
import UnmemorizedTodo from "./Todo";
import AddTodo from "./AddTodo";
import Filter from './Filter';
import useCounter from '../useCounter';

import { AppContext } from '../App';

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

function getFiltered(todos, visibility) {
  if (visibility === 'all') return todos;

  return todos.filter((t) => visibility === 'active' ? !t.isDone : t.isDone);
}


const Todo = React.memo(UnmemorizedTodo);

const TodoList = ({ visibility, themeColor, setThemeColor, setVisibility }) => {
  const [todos, setTodos] = useState(initialTodos);
  const { state } = useContext(AppContext);

  const handleChange = useCallback(
    todo => setTodos((todos) => getUpdate(todos, todo)), []
  );

  const filtered = getFiltered(todos, visibility);

  const filterCount = useCounter('getFiltered');

  return (
    <>
      <div className={styles.todoTop}>getFiltered() was called <span className={styles.filterCount}>{filterCount}</span> times</div>
      <div className={styles.todoBox} style={{'background': `linear-gradient(45deg, ${themeColor}, #056f92)`}}>
        <div className={styles.todoHeader}>
          <input type="color" className={styles.colorPicker} defaultValue={themeColor} onChange={e => setThemeColor(e.target.value)} />
          <Filter className={styles.todoFilter} visibility={visibility} onChange={e => setVisibility(e.target.id)} />
        </div>    
        <ul className={styles.todoList}>
          {filtered.map((todo) => (
            state.memo ?
            <Todo key={todo.id} todo={todo} onChange={handleChange} id={todo.id} /> :
            <UnmemorizedTodo key={todo.id} todo={todo} onChange={handleChange} id={todo.id} />
          ))}
        </ul>
        <AddTodo setTodos={setTodos} />
      </div>
    </>
  );
};


function BlazingTodoList() {
  const [visibility, setVisibility] = useState('all');
  const [themeColor, setThemeColor] = useState('#045975');

  return (
    <div className={styles.todoWrap}>
      <TodoList visibility={visibility} themeColor={themeColor} setThemeColor={setThemeColor} setVisibility={setVisibility} />
    </div>
  )
}


export default BlazingTodoList;
