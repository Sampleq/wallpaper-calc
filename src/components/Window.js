import { useDispatch, useSelector } from 'react-redux';
import styles from './Window.module.css';
import ButtonClose from './Buttons/ButtonClose';
import {
  deleteWindow,
  selectWindowsOptions,
  setWindowHeight,
  setWindowWidth,
} from '../redux/slices/userOptionsSlice';

function Window({ windowData }) {
  const dispatch = useDispatch();

  const windows = useSelector(selectWindowsOptions);
  const window = windows.find(window => window.id === windowData.id);
  //   console.log('window', window);

  function handleInputHeightChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(
      setWindowHeight({
        id: window.id,
        height: e.target.value.replace(/^0+(?=\d)/, ''), //remove leading zeros
      })
    );
  }

  function handleInputWidthtChange(e) {
    if (!isFinite(e.target.value)) return; // simple input type check
    dispatch(
      setWindowWidth({
        id: window.id,
        width: e.target.value.replace(/^0+(?=\d)/, ''), //remove leading zeros
      })
    );
  }

  return (
    <div className={styles.window}>
      <h4>Окно</h4>
      <form>
        {/* like in Room */}
        <label htmlFor='window_height'>
          Высота м
          <input
            type='text'
            name=''
            id='window_height'
            placeholder='0'
            value={window.height}
            onChange={handleInputHeightChange}
          />
        </label>
        <label htmlFor='window_width'>
          Ширина м
          <input
            type='text'
            name=''
            id='window_width'
            placeholder='0'
            value={window.width}
            onChange={handleInputWidthtChange}
          />
        </label>
      </form>
      <ButtonClose onClick={() => dispatch(deleteWindow(windowData.id))} />
    </div>
  );
}

export default Window;
