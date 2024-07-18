import styles from './About.module.css'

export default function AboutUs() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.our_text}>
                    <h1 className={styles.title}>Nuestra Visión</h1>
                    <p>Somos el futuro del soporte tecnológico para las empresas.
                        Nuestra compañía está dedicada a proporcionar soluciones tecnológicas, innovadoras y flexibles que se adapten a las necesidades únicas de cada uno de nuestros clientes.</p>
                    <p>En Nautec, entendemos que la tecnología es una parte esencial de cualquier negocio moderno, pero que la gestión y el mantenimiento de estos sistemas puede ser desafiante. Por eso ofrecemos una amplia gama de servicios de TI, desde el soporte de endpoint e infraestructura hasta la computación en la nube y la gestión de datos, todo diseñado para ayudarlo a mantenerse a la vanguardia.
                    </p>
                    <p>Nuestro equipo de técnicos e ingenieros experimentados trabaja en estrecha colaboración con cada uno de nuestros clientes para comprender sus requisitos tecnológicos y entregar soluciones personalizadas que impulsen la eficiencia, la productividad y el crecimiento. Ya sea que busques una renovación completa de TI o simplemente necesites un poco más de apoyo, Nautec está aquí para ayudarte.</p>

                    <p>No te quedes atrás en el rápido paisaje tecnológico de hoy. Contáctanos hoy mismo y descubre cómo Nautec puede llevar tu negocio al siguiente nivel.
                    </p>

                </div>
                <div className={styles.our_img}>
                    <img src="/Imagenes/About/about-1.png" alt="nosotros" loading='lazy' />
                </div>
            </div>
        </div>
    )
}