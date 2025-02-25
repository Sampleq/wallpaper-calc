import { useDispatch, useSelector } from 'react-redux';
import style from './Rapport.module.css';
import {
  selectRapportOptions,
  setRapportOptions,
} from '../redux/slices/userOptionsSlice';

function Rapport() {
  const dispatch = useDispatch();
  const rapport = useSelector(selectRapportOptions);

  return (
    <div className={style.rapport}>
      <h2>Раппорт</h2>

      <form>
        <input
          value={0}
          checked={+rapport === 0}
          //   checked={rapport == 0} // или так
          name='rapport'
          type='radio'
          id='rapport_1'
          onChange={e => {
            // console.log('rapport_1');
            dispatch(setRapportOptions(e.target.value));
          }}
        />
        <label htmlFor='rapport_1'>0</label>

        <input
          value={0.32}
          checked={+rapport === 0.32}
          name='rapport'
          type='radio'
          id='rapport_2'
          onChange={e => {
            // console.log('rapport_2');
            dispatch(setRapportOptions(e.target.value));
          }}
        />
        <label htmlFor='rapport_2'>0.32м</label>

        <input
          value={0.64}
          checked={+rapport === 0.64}
          name='rapport'
          type='radio'
          id='rapport_3'
          onChange={e => {
            // console.log('rapport_3');
            dispatch(setRapportOptions(e.target.value));
          }}
        />
        <label htmlFor='rapport_3'>0.64м </label>
      </form>
    </div>
  );
}

export default Rapport;
