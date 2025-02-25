import { useDispatch, useSelector } from 'react-redux';
import styles from './Roll.module.css';
import {
  selectRollSquareOptions,
  setRollSquareOptions,
} from '../redux/slices/userOptionsSlice';

function Roll() {
  const dispatch = useDispatch();
  const rollSquare = useSelector(selectRollSquareOptions);

  return (
    <div className={styles.roll}>
      <h2>Параметры рулона</h2>

      <form>
        <input
          value={1.06 * 10}
          checked={+rollSquare === 1.06 * 10}
          name='roll'
          type='radio'
          id='roll_1'
          onChange={e => {
            console.log('roll_1');
            dispatch(setRollSquareOptions(e.target.value));
          }}
        />
        <label htmlFor='roll_1'>1.06 x 10м</label>

        <input
          value={1.06 * 25}
          checked={+rollSquare === 1.06 * 25}
          name='roll'
          type='radio'
          id='roll_2'
          onChange={e => {
            console.log('roll_2');
            dispatch(setRollSquareOptions(e.target.value));
          }}
        />
        <label htmlFor='roll_2'>1.06 x 25м</label>
      </form>
    </div>
  );
}

export default Roll;
