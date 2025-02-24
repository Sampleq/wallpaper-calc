import ButtonBlue from './Buttons/ButtonBlue';
import ButtonClose from './Buttons/ButtonClose';
import styles from './Main.module.css';
import Rapport from './Rapport';
import Roll from './Roll';
import Room from './Room';
import Windows from './Windows';

function Main() {
  return (
    <div className={styles.main}>
      <Room />
      <div className={styles.radio_wrapper}>
        <Roll />
        <Rapport />
      </div>
      <Windows />

      <div className={styles.dashed}></div>
      <ButtonBlue>Рассчитать материалы</ButtonBlue>

      <ButtonClose />
    </div>
  );
}

export default Main;
