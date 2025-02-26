import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './Windows.module.css';
import {
  addWindow,
  deleteWindow,
  selectWindowsOptions,
} from '../redux/slices/userOptionsSlice';
import Window from './Window';

function Windows() {
  const dispatch = useDispatch();
  const windows = useSelector(selectWindowsOptions);
  // console.log(windows);

  return (
    <div className={styles.windows}>
      <h2>Параметры окон</h2>

      <div className={styles.windows_items}>
        {windows.map(window => (
          <Window
            key={window.id}
            handleDeleteWindow={() => {
              dispatch(deleteWindow(window.id));
            }}
          />
        ))}

        {/* можно вынести отдельным компонентом */}
        <button
          className={styles.windows_button}
          onClick={() => {
            dispatch(
              addWindow({
                heigth: 0,
                width: 0,
                id: uuidv4(),
              })
            );
          }}
        >
          Добавить окно
        </button>
      </div>
    </div>
  );
}

export default Windows;
