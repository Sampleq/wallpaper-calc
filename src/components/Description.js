import { useDispatch } from 'react-redux';
import ButtonBlue from './Buttons/ButtonBlue';
import styles from './Description.module.css';
import { toggleShowDescription } from '../redux/slices/showDescriptionSlice';

function Description() {
  const dispatch = useDispatch();

  return (
    <div className={styles.description}>
      <h1>Калькулятор обоев</h1>
      <p>
        Онлайн-калькулятор расчета обоев по поможет вам определить число
        рулонов, требуемых для оклеивания, с учетом окон и дверей. Чтобы
        получить точные результаты, просто укажите параметры помещения и
        размеры в специальной таблице. Наша программа также берет в учет
        повторение рисунка (раппорт), что позволяет оптимизировать расходы на
        материалы и клей.
      </p>

      <ButtonBlue
        onClick={() => {
          dispatch(toggleShowDescription());
        }}
      >
        Начать расчет материалов
      </ButtonBlue>
    </div>
  );
}

export default Description;
