import styles from "./StockContainer.module.scss"

export const StockContainer = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            <td className={styles.data}>Model</td>
            <td className={styles.data}>Color</td>
            <td className={styles.data}>Kol Stock</td>
            <td className={styles.data}>Tyr Stock</td>
            <td className={styles.data}>Total</td>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr className={styles.row}>
            <td className={styles.data}>GLAM</td>
            <td className={styles.data}>green</td>
            <td className={styles.data}>2</td>
            <td className={styles.data}>5</td>
            <td className={styles.data}>7</td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.data}>GLAM</td>
            <td className={styles.data}>gray</td>
            <td className={styles.data}>2</td>
            <td className={styles.data}>5</td>
            <td className={styles.data}>7</td>
          </tr>
        </tbody>
        <tfoot className={styles.foot}>
          <tr className={styles.row}>
            <td className={styles.data}></td>
            <td className={styles.data}>Total:</td>
            <td className={styles.data}>10</td>
            <td className={styles.data}>20</td>
            <td className={styles.data}>30</td>
          </tr>
        </tfoot>
      </table>
      <button className={styles.btn}>Edit stock</button>
    </div>
  )
}