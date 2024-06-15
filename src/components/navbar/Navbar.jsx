import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header_desktop}>
      <div>
        <img
          className={styles.logo}
          src="Imagenes/Logo.png"
          loading="lazy"
          alt="Logo Nautec"
        />
      </div>
      <div className={styles.container}>
        <ul className={styles.item}>Inicio</ul>
        <ul className={styles.item}>Servicios</ul>
        <ul className={styles.item}>Capacitación</ul>
        <ul className={styles.item}>Nosotros</ul>
        <ul className={styles.item}>Blog</ul>
        <ul className={styles.item}>Contacto</ul>
        <ul className={styles.item}>Soporte</ul>
      </div>
    </header>
  );
}
