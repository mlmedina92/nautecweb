import styles from "./Navbarmobile.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbarmobile({toggleSideBar,handleViews}) {
  return (
    <header className={styles.header_mobile}>
      <div className={styles.subheader}>
        <img id="home" className={styles.logo}src="Imagenes/Logo.png" loading="lazy" alt="Logo Nautec" onClick={handleViews} />
      </div>
      <div className={styles.subheader}>
        <GiHamburgerMenu className={styles.navmenu} onClick={toggleSideBar} />
      </div>
    </header>
  );
}
