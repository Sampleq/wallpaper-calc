import style from './Rapport.module.css';

function Rapport() {
  return (
    <div className={style.rapport}>
      <h2>Раппорт</h2>

      <form>
        <input
          value={0}
          name='rapport'
          type='radio'
          id='rapport_1'
          onChange={() => {
            console.log('rapport_1');
          }}
        />
        <label htmlFor='rapport_1'>0</label>

        <input
          value={0.32}
          name='rapport'
          type='radio'
          id='rapport_2'
          onChange={() => {
            console.log('rapport_2');
          }}
        />
        <label htmlFor='rapport_2'>0.32м</label>

        <input
          value={0.64}
          name='rapport'
          type='radio'
          id='rapport_3'
          onChange={() => {
            console.log('rapport_3');
          }}
        />
        <label htmlFor='rapport_3'>0.64м </label>
      </form>
    </div>
  );
}

export default Rapport;
