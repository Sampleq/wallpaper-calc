import styles from './ButtonClose.module.css';

function ButtonClose(props) {
  return (
    <button
      // передаём все свойства (props) компонента ButtonClose "как есть" в button
      {...props}
      className={styles.close}
    >
      X
    </button>
  );
}

export default ButtonClose;
