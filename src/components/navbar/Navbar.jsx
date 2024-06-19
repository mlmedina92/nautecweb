import styles from "./Navbar.module.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Navbar({ handleViews }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const options = [
    { name: "Infraestructura", route: "infraestructura" },
    { name: "Monitoreo y Backup", route: "monitoreo-backup" },
    { name: "Management", route: "management" },
    { name: "Software", route: "software" },
  ];
  return (
    <header className={styles.header_desktop}>
      <div>
        <img
          id="home"
          className={styles.logo}
          src="Imagenes/Logo.png"
          loading="lazy"
          alt="Logo Nautec"
          onClick={handleViews}
        />
      </div>
      <div className={styles.container}>
        <ul id="home" className={styles.item} onClick={handleViews}>Inicio</ul>


        <div className={styles.dropdown_container}>
          <ul className={styles.item} onClick={toggleDropdown}>
            Servicios
            {isOpen ? (
              <IoIosArrowUp className={styles.arrow} />
            ) : (
              <IoIosArrowDown className={styles.arrow} />
            )}
          </ul>
          {isOpen && (
            <ul className={styles.dropdown}>
              {options.map((option) => (
                <li
                  className={styles.subitem}
                  key={option.name}
                  id={option.route}
                  onClick={handleViews}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>


        <ul id="capacitacion" className={styles.item} onClick={handleViews}>Capacitación</ul>
        <ul id="nosotros" className={styles.item} onClick={handleViews}>Nosotros</ul>
        <ul id="blog" className={styles.item} onClick={handleViews}>Blog</ul>
        <ul id="contacto" className={styles.item} onClick={handleViews}>Contacto</ul>
        <a href="https://soporte.nautec.com.ar/support/login" target="_blank">
          <ul className={styles.item}>Soporte</ul>
        </a>
      </div>
    </header>
  );
}
