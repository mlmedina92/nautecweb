import styles from './Management.module.css'

export default function Management() {
    return (
        <div className={styles.management}>
            <h1 className={styles.title}>
                Management
            </h1>
            <div className={styles.presentation}>
                El Management es la columna vertebral de las empresas modernas, es la fuerza impulsora que hace que las organizaciones sean más productivas y eficientes. Una inversión valiosa que puede proporcionar resultados tangibles para su negocio. Con su capacidad para aumentar la productividad, mejorar la seguridad, reducir costos, facilitar una mejor toma de decisiones y mejorar la satisfacción del cliente.
            </div>

            <section className={styles.container}>
                <div className={styles.paragraph_img}>
                    <img
                        className={styles.img_div}
                        src="Imagenes\Servicios\Management\management-1.PNG"
                        alt="img servicio"
                        loading="lazy"
                    />
                </div>
                <div className={styles.paragraph_service}>
                    <h2 className={styles.subtitle}>Gerenciamiento de IT</h2>
                    <p>
                        Optimiza los procesos y sistemas dentro de su organización, reduciendo el tiempo y esfuerzo necesarios para completar las tareas. Esto resulta en un aumento de la productividad, liberando recursos que se pueden dirigir hacia iniciativas más estratégicas.  Puede ayudarle a reducir costos en diversas áreas, desde la optimización del uso de la tecnología existente hasta la negociación de mejores acuerdos con proveedores. Con las estrategias adecuadas de gestión, puede reducir costos sin sacrificar calidad o fiabilidad.
                    </p>
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.paragraph_service}>
                    <h2 className={styles.subtitle}>Gestión de proyectos con metodologías Ágiles</h2>
                    <p>
                        Ofrecemos un enfoque estructurado para planificar, ejecutar y cerrar proyectos, garantizando que se entreguen con éxito, a tiempo, dentro del presupuesto y con la satisfacción de los interesados. Con un enfoque en las mejores prácticas y metodologías comprobadas, ayudamos a mejorar los resultados del proyecto e impulsar el éxito del negocio. Identificamos y gestionamos los riesgos potenciales, reduciendo la probabilidad de retrasos en el proyecto y sobrecostos. Con un enfoque en la gestión proactiva, ayudamos a las organizaciones a mitigar riesgos y entregar proyectos a tiempo y dentro del presupuesto.
                    </p>
                </div>
                <div className={styles.paragraph_img}>
                    <img
                        className={styles.img_div}
                        src="Imagenes\Servicios\Management\management-2.PNG"
                        alt="img servicio"
                        loading="lazy"
                    />
                </div>
            </section>
            <div className={styles.container_end}>
                <h2>
                    Podemos encontrar la mejor solución, para que sus inversiones se conviertan en resultados tangibles.
                </h2>
                <br />
                <br />

                <a
                    className={styles.mail}
                    href="mailto:info@nautec.com.ar"
                    target="_blank"
                    rel="noreferrer"
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