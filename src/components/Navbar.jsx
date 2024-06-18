import styles from "./Navbar.module.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "Infraestructura",
    "Monitoreo y Backup",
    "Management",
    "Software",
  ];
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
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>


        <ul className={styles.item}>Capacitación</ul>
        <ul className={styles.item}>Nosotros</ul>
        <ul className={styles.item}>Blog</ul>
        <ul className={styles.item}>Contacto</ul>
        <a href="https://soporte.nautec.com.ar/support/login" target="_blank">
          <ul className={styles.item}>Soporte</ul>
        </a>
      </div>
    </header>
  );
}
