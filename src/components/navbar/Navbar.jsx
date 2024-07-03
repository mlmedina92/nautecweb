import styles from "./Navbar.module.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function Navbar({ handleViews }) {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClick = (event) => {
    isOpen && toggleDropdown()
    handleViews(event)
  }

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
          id=""
          className={styles.logo}
          src="Imagenes/Logo.png"
          loading="lazy"
          alt="Logo Nautec"
          onClick={handleClick}
        />
      </div>
      <div className={styles.container}>

        <ul
          id=""
          className={location.pathname === "/" ? styles.item_active : styles.item}
          onClick={handleClick}>
          Inicio
        </ul>


        <div className={styles.dropdown_container}>
          <ul id="services" className={styles.item} onClick={toggleDropdown}>
            Servicios
            {isOpen ? (
              <IoIosArrowUp className={styles.arrow} />
            ) : (
              <IoIosArrowDown className={styles.arrow} />
            )}
          </ul>
          {isOpen && (
            <ul id="dropdown" className={styles.dropdown}>
              {options.map((option) => (
                <li
                  className={location.pathname === `/${option.route}` ? styles.subitem_active : styles.subitem}
                  key={option.name}
                  id={option.route}
                  onClick={handleClick}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>


        <ul
          id="capacitacion"
          className={location.pathname === "/capacitacion" ? styles.item_active : styles.item}
          onClick={handleClick}>
          Capacitación
        </ul>
        <ul
          id="nosotros"
          className={location.pathname === "/nosotros" ? styles.item_active : styles.item}
          onClick={handleClick}>
          Nosotros
        </ul>
        <ul
          id="blog"
          className={location.pathname === "/blog" ? styles.item_active : styles.item}
          onClick={handleClick}>
          Blog
        </ul>
        <ul
          id="contacto"
          className={location.pathname === "/contacto" ? styles.item_active : styles.item}
          onClick={handleClick}>
          Contacto
        </ul>
        <a href="https://soporte.nautec.com.ar/support/login" target="_blank">
          <ul className={styles.item}>Soporte</ul>
        </a>
      </div>
    </header>
  );
}
