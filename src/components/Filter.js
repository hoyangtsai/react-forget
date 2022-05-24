import clsx from 'clsx';
import styles from './Filter.module.css';

export default function Filter({ visibility, className, onChange }) {
  
  return (
    <div className={clsx(className, styles.filter)}>
      <ul className={styles.filterList}>
        <li className={styles.filterListItem}>
          <input type="radio" name="filter" id="all" 
            checked={visibility === "all"}
            onChange={e => onChange(e)}
          />
          <label htmlFor="all">All</label>
        </li>
        <li className={styles.filterListItem}>
          <input type="radio" name="filter" id="active"
            checked={visibility === "active"}
            onChange={e => onChange(e)}
          />
          <label htmlFor="active">Active</label>
        </li>
        <li className={styles.filterListItem}>
          <input type="radio" name="filter" id="completed"
            checked={visibility === "completed"}
            onChange={e => onChange(e)}
          />
          <label htmlFor="completed">Completed</label>
        </li>
      </ul>
    </div>
  )
}
