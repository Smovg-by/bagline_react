import styles from './NewOrderContainer.module.scss'

export const NewOrderContainer = () => {
  return (
    <div className={styles.container}>
      <input type={'text'} placeholder={'Nickname'} className={styles.item} />
      <input type={'text'} placeholder={'First name'} className={styles.item} />
      <input type={'text'} placeholder={'Last name'} className={styles.item} />
      <input type={'text'} placeholder={'Address'} className={styles.item} />
      <input type={'tel'} placeholder={'Phone number'} className={styles.item} />
      <label><input type={'radio'} value={"Carrier"} className={styles.item} />Carrier</label>
      <label>  <input type={'radio'} value={"Evropochta"} className={styles.item} />Evropochta</label>
      <select className={styles.item}>
        <option>GLAM</option>
        <option>SOULD</option>
        <option>EMI</option>
      </select>
      <select className={styles.item}>
        <option>Черный</option>
        <option>Серый</option>
        <option>Зеленый</option>
      </select>
      <input type={'text'} placeholder={'Price'} className={styles.item} />
      <button className={styles.btn}>Submit</button>
    </div>
  )
}