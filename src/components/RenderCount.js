import styles from './RenderCount.module.css';
import useCounter from '../useCounter';

function RenderCount({ name }) {
  const count = useCounter(name);

  return (
    <div className={styles.renderCount}>
      {count}
    </div>
  )
}

export default RenderCount;