import styles from "./Todo.module.css";
import RenderCount from "./RenderCount";

const Todo = ({ todo, onChange, id }) => {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={todo.done}
          onChange={() => onChange(todo)}
        />
        <span className={styles.checkmark} />
        <span className={styles.name}>{todo.text}</span>
      </label>
      <RenderCount name={id} />
    </li>
  );
};

export default Todo;
