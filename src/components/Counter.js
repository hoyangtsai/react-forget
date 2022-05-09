import { useRef, useEffect } from 'react';

import styles from './Counter.module.css';

function RenderCounter({name}) {
  const count = useRef(0);

  useEffect(() => {
    count.current++;
  })

  return (
    <div className={styles.counter}>
      {count.current}
    </div>
  )
}

export default RenderCounter;