import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.scss"

export const NavbarContainer = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.item}>
        <NavLink to='/stock' className={styles.link} activeClassName={styles.activeLink}>
          Stock
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/neworder' className={styles.link} activeClassName={styles.activeLink}>
          New order
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/orders' className={styles.link} activeClassName={styles.activeLink}>
          Orders
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/confirm' className={styles.link} activeClassName={styles.activeLink}>
          Confirm shipping
        </NavLink>
      </div>
    </nav>
  )
}