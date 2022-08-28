import styles from "./ColorPicker.module.css";

export default function ColorPicker({ value, onChange }) {
  return (
    <input type="color" className={styles.colorPicker} defaultValue={value} onChange={onChange} />
  )
}
