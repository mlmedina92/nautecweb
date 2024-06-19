import styles from "./Sidebar.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Sidebar({ toggleSideBar, handleViews }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const options = [
    { name: "Infraestructura", route: "infraestructura" },
    { name: "Monitoreo y Backup", route: "monitoreo-backup" },
    { name: "Management", route: "management" },
    { name: "Software", route: "software" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.close} onClick={toggleSideBar}>
        <IoCloseSharp />
      </div>
      <div className={styles.container}>
        <ul id="home" className={styles.item} onClick={handleViews}>Inicio</ul>
        <div className="dropdown">
          <ul className={styles.item} onClick={toggleDropdown}>
            Servicios
            {isOpen ? (
              <IoIosArrowUp className={styles.arrow} />
            ) : (
              <IoIosArrowDown className={styles.arrow} />
            )}
          </ul>
          {isOpen && (
            <ul className="dropdown-menu">
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
        </div>{" "}
        <ul id="capacitacion" className={styles.item} onClick={handleViews}>Capacitación</ul>
        <ul id="nosotros" className={styles.item} onClick={handleViews}>Nosotros</ul>
        <ul id="blog" className={styles.item} onClick={handleViews}>Blog</ul>
        <ul id="contacto" className={styles.item} onClick={handleViews}>Contacto</ul>
        <a href="https://soporte.nautec.com.ar/support/login" target="_blank">
          <ul className={styles.item}>Soporte</ul>
        </a>
      </div>
    </div>
  );
}
