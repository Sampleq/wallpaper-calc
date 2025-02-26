import { useDispatch, useSelector } from 'react-redux';
import ButtonClose from './Buttons/ButtonClose';
import {
  deleteDoor,
  selectDoorsOptions,
  setDoorHeight,
  setDoorWidth,
} from '../redux/slices/userOptionsSlice';

import styles from './Door.module.css';

function Door({ doorData }) {
  const dispatch = useDispatch();

  const doors = useSelector(selectDoorsOptions);
  const door = doors.find(door => door.id === doorData.id);
  //   console.log('door', door);

  function handleInputHeightChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(
      setDoorHeight({
        id: door.id,
        height: e.target.value.replace(/^0+(?=\d)/, ''), //remove leading zeros
      })
    );
  }

  function handleInputWidthtChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(
      setDoorWidth({
        id: door.id,
        width: e.target.value.replace(/^0+(?=\d)/, ''), //remove leading zeros
      })
    );
  }

  return (
    <div className={styles.door}>
      <h4>Дверь</h4>
      <form>
        {/* like in Room */}
        <label htmlFor='door_height'>
          Высота м
          <input
            type='text'
            name=''
            id='door_height'
            placeholder='0'
            value={door.height}
            onChange={handleInputHeightChange}
          />
        </label>
        <label htmlFor='door_width'>
          Ширина м
          <input
            type='text'
            name=''
            id='door_width'
            placeholder='0'
            value={door.width}
            onChange={handleInputWidthtChange}
          />
        </label>
      </form>
      <ButtonClose onClick={() => dispatch(deleteDoor(doorData.id))} />
    </div>
  );
}

export default Door;
