import { useDispatch, useSelector } from 'react-redux';
import styles from './Room.module.css';
import {
  selectRoomOptions,
  setRoomLength,
  setRoomWidth,
  setRoomHeight,
} from '../redux/slices/userOptionsSlice';

function Room() {
  const dispatch = useDispatch();

  const roomOptions = useSelector(selectRoomOptions);
  //   console.log('roomOptions', roomOptions);

  function handleInputLengthChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(setRoomLength(e.target.value.replace(/^0+(?=\d)/, ''))); // remove leading zeros (exept one in fractional numbers)
  }
  function handleInputWidthChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(setRoomWidth(e.target.value.replace(/^0+(?=\d)/, '')));
  }
  function handleInputHeightChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(setRoomHeight(e.target.value.replace(/^0+(?=\d)/, '')));
  }

  return (
    <div className={styles.room}>
      <h2>Параметры комнаты</h2>
      <form>
        <label htmlFor='room_length'>
          Длина м
          <input
            type='text'
            name=''
            id='room_length'
            placeholder='14.2'
            value={roomOptions.length}
            onChange={handleInputLengthChange}
          />
        </label>
        <label htmlFor='room_width'>
          Ширина м
          <input
            type='text'
            name=''
            id='room_width'
            placeholder='28.5'
            value={roomOptions.width}
            onChange={handleInputWidthChange}
          />
        </label>
        <label htmlFor='room_height'>
          Высота м
          <input
            type='text'
            name=''
            id='room_height'
            placeholder='18.5'
            value={roomOptions.height}
            onChange={handleInputHeightChange}
          />
        </label>
      </form>
    </div>
  );
}

export default Room;
