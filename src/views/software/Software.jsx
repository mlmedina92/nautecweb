import styles from './Software.module.css'

export default function Software() {
    return (
        <div className={styles.software}>
            <h1 className={styles.title}>
                Software
            </h1>
            <div className={styles.presentation}>
                En un mundo cada vez más digitalizado, el software juega un papel crítico en el éxito y la eficiencia de cualquier empresa. Por eso, les ofrecemos a nuestros clientes una solución integral que incluye, desarrollo de aplicaciones, pruebas de calidad (QA Testing) e integraciones entre sistemas. Somos la solución ideal para brindar aplicaciones personalizadas y eficientes para cualquier necesidad.
            </div>

            <section className={styles.container}>
                <div className={styles.paragraph_img}>
                    <img
                        className={styles.img_div}
                        src="Imagenes\Servicios\Software\software-1.png"
                        alt="img servicio"
                        loading="lazy"
                    />
                </div>
                <div className={styles.paragraph_service}>
                    <h2 className={styles.subtitle}>Desarrollo de aplicaciones</h2>
                    <p>
                        Nuestro equipo de expertos en software trabaja en estrecha colaboración para comprender sus requisitos y desarrollar soluciones personalizadas que se ajusten a sus necesidades específicas. Ofrecemos software de alta calidad, con un enfoque en la usabilidad y la eficiencia.
                    </p>
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.paragraph_service}>
                    <h2 className={styles.subtitle}>QA Testing</h2>
                    <p>
                        Realizamos pruebas exhaustivas para asegurarnos de que sus aplicaciones sean estables y cumplan con los más altos estándares de calidad. Gracias a estas pruebas se podrán efectuar mejoras que impactan de manera muy positiva en la experiencia del usuario, la seguridad y performance de la aplicación.
                    </p>
                </div>
                <div className={styles.paragraph_img}>
                    <img
                        className={styles.img_div}
                        src="Imagenes\Servicios\Software\software-2.png"
                        alt="img servicio"
                        loading="lazy"
                    />
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.paragraph_img}>
                    <img
                        className={styles.img_div}
                        src="Imagenes\Servicios\Software\software-3.png"
                        alt="img servicio"
                        loading="lazy"
                    />
                </div>
                <div className={styles.paragraph_service}>
                    <h2 className={styles.subtitle}>Integración entre sistemas</h2>
                    <p>
                        Nuestra integración entre sistemas se encarga de conectar sus aplicaciones existentes para mejorar la usabilidad y la efectividad de sus operaciones. Con nuestro enfoque en la integración, podemos brindarle una solución completa y eficiente que optimice sus procesos y le brinde una ventaja competitiva.
                    </p>
                </div>
            </section>
            <div className={styles.container_end}>
                <h2>
                Contrate nuestros servicios hoy mismo. Juntos, podemos asegurarnos de que su negocio tenga éxito.
                </h2>
                <br />
                <br />

                <a
                    className={styles.mail}
                    href="mailto:info@nautec.com.ar"
                    target="_blank"
                >
                    info@nautec.com.ar
                </a>
                <br />
                <h2 className={styles.phone}>+54 11 5217-9050</h2>
                <br />
                <br />
                <h2>Nautec. Tecnología Simplificada.</h2>
            </div>
        </div>
    )
}