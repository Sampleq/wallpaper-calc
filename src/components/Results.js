import { useDispatch, useSelector } from 'react-redux';
import styles from './Results.module.css';
import { resetResults, selectResults } from '../redux/slices/resultsSlice';
import { resetUserOptions } from '../redux/slices/userOptionsSlice';

function Results() {
  const dispatch = useDispatch();

  const results = useSelector(selectResults);
  const { rollsNumber, wallpaperSquare, coveredArea } = results;

  return (
    <div className={styles.results}>
      <h2>Результаты</h2>

      <div className={styles.results_data}>
        <div>
          <p>{rollsNumber}</p>
          <span>Кол-во рулонов</span>
        </div>
        <div>
          <p>{wallpaperSquare.toFixed(2)} м2</p>
          <span>Кол-во m2 обоев</span>
        </div>
        <div>
          <p>{coveredArea.toFixed()} м2</p>
          <span>Площадь оклейки</span>
        </div>
      </div>

      <div className={styles.results_buttons}>
        {/* Добавить кнопку Рассчитать заново - её нет в макете - но с ней удобнее  */}
        <button
          onClick={() => {
            dispatch(resetUserOptions());
            dispatch(resetResults());
          }}
        >
          Сборосить параметры
        </button>
        <button
          style={{ color: '#5ACD66' }}
          // //  to outside:
          // // import { useNavigate } from 'react-router-dom';
          // // const navigate = useNavigate();
          onClick={() => {
            //   navigate('/catalog', { replace: false })
            console.log(`navigate('/catalog', { replace: false })`);
          }}
        >
          Перейти в каталог
        </button>
      </div>
    </div>
  );
}

export default Results;
