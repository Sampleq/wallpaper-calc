import { IoIosClose } from 'react-icons/io';
import styles from './ButtonClose.module.css';

function ButtonClose(props) {
  return (
    <button
      // передаём все свойства (props) компонента ButtonClose "как есть" в button
      {...props}
      className={styles.close}
    >
      <IoIosClose style={{ fontSize: '3.2rem' }} />
    </button>
  );
}

export default ButtonClose;
