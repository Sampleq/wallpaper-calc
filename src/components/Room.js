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
    if (e.target.value < 0) return; // simple input check
    dispatch(setRoomLength(e.target.value.replace(/^0+(?=\d)/, ''))); // remove leading zeros (exept one in fractional numbers)
  }
  function handleInputWidthChange(e) {
    if (e.target.value < 0) return; // simple input check
    dispatch(setRoomWidth(e.target.value.replace(/^0+(?=\d)/, '')));
  }
  function handleInputHeightChange(e) {
    if (e.target.value < 0) return; // simple input check
    dispatch(setRoomHeight(e.target.value.replace(/^0+(?=\d)/, '')));
  }

  return (
    <div className={styles.room}>
      <h2>Параметры комнаты</h2>
      <form>
        <label htmlFor='room_length'>
          Длина м
          <input
            type='number'
            name=''
            id='room_length'
            placeholder='0'
            // placeholder='14.2'
            value={roomOptions.length}
            onChange={handleInputLengthChange}
          />
        </label>
        <label htmlFor='room_width'>
          Ширина м
          <input
            type='number'
            name=''
            id='room_width'
            placeholder='0'
            // placeholder='28.5'
            value={roomOptions.width}
            onChange={handleInputWidthChange}
          />
        </label>
        <label htmlFor='room_height'>
          Высота м
          <input
            type='number'
            name=''
            id='room_height'
            placeholder='0'
            // placeholder='18.5'
            value={roomOptions.height}
            onChange={handleInputHeightChange}
          />
        </label>
      </form>
    </div>
  );
}

export default Room;
