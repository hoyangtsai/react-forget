import styles from "./Todo.module.css";

const Todo = ({ todo, onChange }) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onChange(todo)}
        />
        <span className={styles.checkmark} />
        <span className={styles.name}>{todo.name}</span>
      </label>
    </li>
  );
};

export default Todo;
