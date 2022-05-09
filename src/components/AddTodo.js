import styles from "./AddTodo.module.css";
import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setTodos((todos) => {
      let newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      return [
        ...todos,
        {
          id: newId,
          name: todo,
          isDone: false
        }
      ];
    });
    setTodo("");
  };

  return (
    <form className={styles.addTodo} onSubmit={handleAdd}>
      <input
        className={styles.input}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="Add todo"
      />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
