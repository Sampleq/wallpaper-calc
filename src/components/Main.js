import { useDispatch, useSelector } from 'react-redux';
import ButtonBlue from './Buttons/ButtonBlue';
import ButtonClose from './Buttons/ButtonClose';
import styles from './Main.module.css';
import Rapport from './Rapport';
import Roll from './Roll';
import Room from './Room';
import Windows from './Windows';
import { toggleShowDescription } from '../redux/slices/showDescriptionSlice';
import Results from './Results';
import { calculateResults, selectResults } from '../redux/slices/resultsSlice';

function Main() {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);

  return (
    <div className={styles.main}>
      <Room />
      <div className={styles.radio_wrapper}>
        <Roll />
        <Rapport />
      </div>
      <Windows />

      <div className={styles.dashed}></div>

      {results ? (
        <Results />
      ) : (
        <ButtonBlue onClick={() => dispatch(calculateResults())}>
          Рассчитать материалы
        </ButtonBlue>
      )}

      <ButtonClose
        onClick={() => {
          dispatch(toggleShowDescription());
          // также можно дополнительно сбрасывать results и userOptions
        }}
      />
    </div>
  );
}

export default Main;
