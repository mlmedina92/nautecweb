import styles from "./Sidebar.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Sidebar({toggleSideBar}) {
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
    <div className={styles.sidebar}>
      <div className={styles.close} onClick={toggleSideBar}>
        <IoCloseSharp />
      </div>
      <div className={styles.container}>
        <ul className={styles.item}>Inicio</ul>
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
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>{" "}
        <ul className={styles.item}>Capacitación</ul>
        <ul className={styles.item}>Nosotros</ul>
        <ul className={styles.item}>Blog</ul>
        <ul className={styles.item}>Contacto</ul>
        <ul className={styles.item}>Soporte</ul>
      </div>
    </div>
  );
}
