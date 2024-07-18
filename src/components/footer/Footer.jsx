import styles from './Footer.module.css'

export default function Footer({ handleViews }) {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>Copyright © 2023 Nautec. - Todos los derechos reservados.</p>
            <div className={styles.button_container}>
                <ul id='' className={styles.item} onClick={handleViews}>Inicio</ul>
                <ul id='infraestructura' className={styles.item} onClick={handleViews}>Infraestructura</ul>
                <ul id='monitoreo-backup' className={styles.item} onClick={handleViews}>Monitoreo y Backup</ul>
                <ul id='management' className={styles.item} onClick={handleViews}>Management</ul>
                <ul id='software' className={styles.item} onClick={handleViews}>Software</ul>
                <ul id='capacitacion' className={styles.item} onClick={handleViews}>Capacitación</ul>
                <ul id='nosotros' className={styles.item} onClick={handleViews}>Nosotros</ul>
                <ul id='blog' className={styles.item} onClick={handleViews}>Blog</ul>
                <ul id='contacto' className={styles.item} onClick={handleViews}>Contacto</ul>
                <a href="https://soporte.nautec.com.ar/support/login" target="_blank" rel="noreferrer">
                    <ul className={styles.item}>Soporte</ul>
                </a>
            </div>
        </footer>
    )
}