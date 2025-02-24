import styles from './Description.module.css';

function Description() {
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

      <button
        onClick={() => {
          console.log('onClick btn in Description ');
        }}
      >
        Начать расчет материалов
      </button>
    </div>
  );
}

export default Description;
