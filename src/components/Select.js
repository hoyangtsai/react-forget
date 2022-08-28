import styles from './Select.module.css';

export default function Select({ value, options, onChange }) {
  return (
    <ul className={styles.select}>
      {options.map(item => (
        <li className={styles.selectItem} key={item.value}>
          <input type="radio"
            name="select"
            value={item.value}
            id={item.value}
            checked={value === item.value}
            onChange={e => onChange(e.target.value)}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </li>
      ))}
    </ul>
  )
}
