import { useDispatch } from 'react-redux';
import styles from './Results.module.css';
import { resetResults } from '../redux/slices/resultsSlice';
import { resetUserOptions } from '../redux/slices/userOptionsSlice';

function Results() {
  const dispatch = useDispatch();

  return (
    <div className={styles.results}>
      <h2>Результаты</h2>

      <div className={styles.results_data}>results_data</div>

      <div className={styles.results_buttons}>
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
