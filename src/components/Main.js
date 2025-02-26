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

// Получаем serOptions из userOptionsSlice и формируем action для action-creator-а calculateResults - рассчитываем площадь стен, кол-во рулонов и т.д.
function thunkFunction(dispatch, getState) {
  const { userOptions } = getState(); // читаем состояние
  //   console.log('userOptions',userOptions);
  dispatch(calculateResults(userOptions));
}

function Main() {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  //   console.log('results', results);

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
        <ButtonBlue
          onClick={() => {
            dispatch(thunkFunction);
            // dispatch(calculateResults()); - moved inside thunkFunction
          }}
        >
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
