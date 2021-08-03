import styles from './Navbar.module.scss';

const NavBar = () => (
  <div className={styles.navbar__container}>
    <div className={styles.navbar__logo}>Logo</div>
    <div className={styles.navbar__list}>
      <div>Movie</div>
      <div>TV</div>
      <div>About</div>
      <div>Search</div>
    </div>
  </div>
);

export default NavBar;
