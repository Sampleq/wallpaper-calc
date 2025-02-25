import styles from './Roll.module.css';

function Roll() {
  return (
    <div className={styles.roll}>
      <h2>Параметры рулона</h2>

      <form>
        <input value={1.06 * 10} name='roll' type='radio' id='roll_1' />
        <label htmlFor='roll_1'>1.06 x 10м</label>

        <input value={1.06 * 25} name='roll' type='radio' id='roll_2' />
        <label htmlFor='roll_2'>1.06 x 25м</label>
      </form>
    </div>
  );
}

export default Roll;
