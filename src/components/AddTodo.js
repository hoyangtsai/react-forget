import styles from "./AddTodo.module.css";
import { useState } from "react";

const AddTodo = ({ setTodos, themeColor = '#045975' }) => {
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos(ts => {
      let newId = ts.length > 0 ? ts[ts.length - 1].id + 1 : 1;
      return [
        ...ts,
        {
          id: newId,
          text: text,
          done: false
        }
      ];
    });
    setText("");
  };

  const bgGradient = `linear-gradient(
    209.21deg,
    ${themeColor} 22 0%,
    ${themeColor}ee 100%
  )`;

  return (
    <form className={styles.addTodo} onSubmit={handleAddTodo}>
      <input
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Add todo"
        style={{background: bgGradient}}
      />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
