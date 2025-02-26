import { PiMagicWandBold } from 'react-icons/pi';

import styles from './ButtonBlue.module.css';

function ButtonBlue(props) {
  // console.log(props);

  return (
    // передаём все свойства (props) компонента Button "как есть" в другой компонент
    <button {...props} className={styles.btn_blue}>
      <PiMagicWandBold
        style={{
          marginRight: '0.5rem',
          fontSize: '2.2rem',
          marginBottom: '-0.5rem',
        }}
      />
      {props.children}
    </button>
  );
}

export default ButtonBlue;
