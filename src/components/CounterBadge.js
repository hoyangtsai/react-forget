import useCounter from '../useCounter';
import styles from "./CounterBadge.module.css";

export default function CounterBadge() {
  const counter = useCounter('getFiltered');
  return (
    <div className={styles.CounterBadge}>{counter}</div>
  )
};

