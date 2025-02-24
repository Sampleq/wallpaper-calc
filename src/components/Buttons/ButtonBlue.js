import styles from './ButtonBlue.module.css';

function ButtonBlue(props) {
  console.log(props);

  return (
    // передаём все свойства (props) компонента Button "как есть" в другой компонент
    <button {...props} className={styles.btn_blue}>
      {props.children}
    </button>
  );
}

export default ButtonBlue;
