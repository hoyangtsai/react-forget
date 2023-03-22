import React, { useState, useContext } from "react";
import styles from "./BlazingTodoList.module.css";
import Select from './Select';
import CounterBadge from "./CounterBadge";
import ColorPicker from "./ColorPicker";
import TodoList from "./TodoList";
import TodoListOptimized from "./TodoList-optimized";
import { AppContext } from '../App';

export default function BlazingTodoList() {
  const [visibility, setVisibility] = useState('all');
  const [themeColor, setThemeColor] = useState('#045975');
  const { state } = useContext(AppContext);

  const bgGradient = `linear-gradient(
    209.21deg,
    rgb(8, 126, 164) 13.57%,
    ${themeColor} 98.38%
  )`;

  return (
    <div className={styles.column}>
      <div className={styles.countBanner}>
        <code>getFiltered()</code> was called
        <CounterBadge />
        times
      </div>
      <div className={styles.todoListApp} style={{ background: bgGradient }}>
        <div className={styles.todoHeader}>
          <ColorPicker value={themeColor} onChange={e => setThemeColor(e.target.value)} />
          <Select
            value={visibility}
            options={[
              { value: 'all', label: 'All' },
              { value: 'active', label: 'Active' },
              { value: 'completed', label: 'Completed' },
            ]}
            onChange={value => setVisibility(value)}
          />
        </div>
        {state.memo ? 
          <TodoListOptimized visibility={visibility} themeColor={themeColor} />: 
          <TodoList visibility={visibility} themeColor={themeColor} />
        }
      </div>
    </div>
  );
};
