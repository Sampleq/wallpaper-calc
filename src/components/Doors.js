import { PiDoorOpenDuotone } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Doors.module.css';
import { addDoor, selectDoorsOptions } from '../redux/slices/userOptionsSlice';
import Door from './Door';

function Doors() {
  const dispatch = useDispatch();
  const doors = useSelector(selectDoorsOptions);
  // console.log(doors);

  return (
    <div className={styles.doors}>
      <h2>Параметры дверей</h2>

      <div className={styles.doors_items}>
        {doors.map(door => (
          <Door key={door.id} doorData={door} />
        ))}

        {/* можно вынести отдельным компонентом */}
        <button
          className={styles.doors_button}
          onClick={() => {
            dispatch(
              addDoor({
                height: 0,
                width: 0,
                id: uuidv4(),
              })
            );
          }}
        >
          <PiDoorOpenDuotone style={{ fontSize: '2.4rem' }} />
          <br />
          Добавить дверь
        </button>
      </div>
    </div>
  );
}

export default Doors;
