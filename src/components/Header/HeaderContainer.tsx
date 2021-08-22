import mainLogo from '../../assets/img/bagline-logo.png'
import styles from './HeaderContainer.module.scss'

export const HeaderContainer = () => {
  return (
    <header className={styles.header}>
      <img src={mainLogo} alt={"mainlogo"} className={styles.headerLogo}/>
    </header>
  )
}