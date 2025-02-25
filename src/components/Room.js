import styles from './Room.module.css';

function Room() {
  return (
    <div className={styles.room}>
      <h2>Параметры комнаты</h2>
      <form>
        <label htmlFor='room_length'>
          Длина м
          <input type='text' name='' id='room_length' placeholder='14.2' />
        </label>
        <label htmlFor='room_width'>
          Ширина м
          <input type='text' name='' id='room_width' placeholder='28.5' />
        </label>
        <label htmlFor='room_height'>
          Высота м
          <input type='text' name='' id='room_height' placeholder='18.5' />
        </label>
      </form>
    </div>
  );
}

export default Room;
