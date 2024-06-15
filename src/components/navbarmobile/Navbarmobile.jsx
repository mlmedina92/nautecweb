import styles from "./Navbarmobile.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbarmobile() {
  return (
    <header className={styles.header_mobile}>
      <div>
        <img src="" loading="lazy" alt="Logo Nautec" />
      </div>
      <div>
        <GiHamburgerMenu />
      </div>
      {/* <div>
        <ul>Inicio</ul>
        <ul>Servicios</ul>
        <ul>Capacitación</ul>
        <ul>Nosotros</ul>
        <ul>Blog</ul>
        <ul>Contacto</ul>
        <ul>Soporte</ul>
      </div> */}
    </header>
  );
}
