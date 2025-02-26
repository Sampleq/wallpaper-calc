import { useDispatch } from 'react-redux';
import styles from './Window.module.css';
import ButtonClose from './Buttons/ButtonClose';
import { deleteWindow } from '../redux/slices/userOptionsSlice';

function Window({ handleDeleteWindow }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.window}>
      Окно
      <form>
        {/* like in Room */}
        <label htmlFor=''></label>
        <input type='text' name='' id='' placeholder='0' />
      </form>
      <ButtonClose onClick={handleDeleteWindow} />
    </div>
  );
}

export default Window;
