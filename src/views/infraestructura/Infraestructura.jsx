import styles from "./Infraestructura.module.css";

export default function Infraestructura() {
  return (
    <div className={styles.services}>
      <h1 className={styles.title}>
        EIS (Endpoint and Infraestructure Services)
      </h1>
      <div className={styles.presentation}>
        Conocemos los costos que implica tener un departamento de IT y la
        gestión de sus recursos. La Consultoría de TI ofrece una gama de
        servicios que ayudan a las empresas a optimizar sus sistemas y procesos
        de tecnología. Ya sea evaluando y mejorando su infraestructura de TI
        actual, implementando nuevas soluciones tecnológicas o brindando soporte
        continuo, los consultores de TI tienen la experiencia para ayudarlo a
        alcanzar sus objetivos. Con nuestros servicios podrá disfrutar de una
        infraestructura más eficiente, mejorar la experiencia de los usuarios
        internos y externos, disminuir los costos sin preocuparse por los
        recursos ni los costos que estos implican.
      </div>

      <h2 className={styles.title}>Nuestros Servicios</h2>
      <section className={styles.container}>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-1.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Arquitectura de Soluciones</h2>
          <p>
            Los Arquitectos de Soluciones cumplen un papel fundamental para el
            mundo de IT. De ellos y sus conocimientos depende la correcta
            interpretación de las necesidades, para luego llevar a cabo todas
            las tareas, procesos y coordinación que permiten que una idea tome
            forma y se haga realidad. Cada necesidad, mejora o nueva idea la
            llevaremos a cabo de manera ágil y eficiente para que nuestros
            clientes puedan disfrutar de los resultados. Todo esto gracias a
            nuestros especialistas que cuentan con más de 16 años de experiencia
            en el mercado, trabajo con múltiples clientes de diversas industrias
            y en múltiples países.
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Cloud</h2>
          <p>
            Cloud Computing ofrece un entorno más eficiente, flexible y seguro.
            Le permite olvidarse el mantenimiento y actualización del Hardware
            subyacente para enfocarse solo en sus servicios o productos. De esta
            manera escalar o disminuir fácilmente los recursos según las
            necesidades del negocio, ahorrar en mantenimiento, aumentar la
            disponibilidad y distribución de su infraestructura, brindando
            mejores servicios. Nuestros Arquitectos de Soluciones pueden
            brindarle una solución integral, ya sea que quiera migrar a la nube
            o bien posea un esquema híbrido, brindándole asesoramiento,
            planificación, migración, optimización y soporte.
          </p>
        </div>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-2.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-3.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Servidores Físicos</h2>
          <p>
            Cuando hablamos de servidores hacemos mención del amplio abanico de
            soluciones que las empresas tienen incorporadas en su
            infraestructura, desde Sistemas Operativos, Hardware y Aplicaciones.
            Entendemos la complejidad de trabajar con diversas tecnologías, la
            necesidad de integración y el esfuerzo que demanda que todo funcione
            de manera óptima. Por tal motivo ofrecemos soluciones para la
            administración completa del centro de cómputos, administración
            compartida, consultoría, asesoramiento o soporte que permiten que su
            compañía funcione en óptimas condiciones. El Outsorcing de IT es una
            metodología cada vez más adoptada por las empresas ya que disminuye
            los costos de la contratación de personal y la gestión de recursos
            humanos.
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Endpoints</h2>
          <p>
            Las estaciones de trabajo, tablets y celulares se convirtieron en
            instrumentos indispensables para el funcionamiento de cualquier
            empresa, ya que de ellos depende que los empleados puedan cumplir
            con sus tareas y objetivos. Esta área suele ser la última a tener en
            cuenta por muchas empresas generando que las problemáticas diarias
            impidan que se cumplan con tiempos y objetivos. Este sector también
            es el más demandante para el área de soporte de IT, haciendo que más
            del 60% del trabajo esté enfocado en la resolución diaria de
            incidentes a usuarios. Nuestros servicios de Soporte a Endpoints
            permitirán mejorar la experiencia de los usuarios, mejorar las
            dinámicas de trabajo, aumentar la eficiencia, disminuir los reclamos
            y permitir que el sector de TI esté enfocado principalmente en la
            infraestructura.
          </p>
        </div>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-4.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-5.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Virtualización</h2>
          <p>
            La virtualización permite optimizar el uso de recursos físicos
            permitiendo que un solo equipo pueda brindar diferentes soluciones
            virtualizadas en diferentes sistemas operativos. Además, facilita la
            configuración de la alta disponibilidad, recuperación ante desastres
            y gestión. Si bien es algo que las empresas adoptan hace años hoy
            están migrando a una modalidad de trabajo enteramente virtualizada,
            virtualizando aplicaciones, estaciones de trabajo y todo lo que
            implica el entorno de trabajo para el usuario, permitiendo que
            cualquier usuario pueda acceder a su entorno de trabajo desde
            cualquier lugar y en todo momento, sin la necesidad de disponer de
            una estación de trabajo. Esta metodología agiliza el delivery de
            nuevos sistemas, integraciones y movilidad ya que se encuentra todo
            preconfigurado y con un solo click los usuarios pueden acceder a
            todas las herramientas laborales necesarias para desempeñar su
            función o bien un solo click para desplegar nuevos sistemas y
            aplicaciones.
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Networking</h2>
          <p>
            Hoy todos dependemos de las redes desde las tareas más complejas
            hasta las más simples. Todas las aplicaciones utilizadas y por las
            cuales nos comunicamos dependen de una red que funcione sin errores
            y de manera eficiente. Por tal motivo implementamos, administramos y
            mejoramos sus redes de datos, aplicando políticas y sistemas que
            aseguren el óptimo funcionamiento, evitando así errores y problemas
            que afecten sus servicios y aplicaciones.
          </p>
        </div>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-6.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Infraestructura/infraestructura-7.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Seguridad</h2>
          <p>
            La seguridad cibernética es un problema crítico para las empresas en
            todo el mundo. Con tanta información sensible almacenada y
            transmitida en línea, es esencial que las empresas tomen medidas
            para protegerse de estos ataques. Esto puede incluir la
            implementación de contraseñas fuertes, la actualización regular de
            software y sistemas e invertir en soluciones avanzadas de seguridad
            como firewall y software antivirus. También es importante que las
            empresas eduquen a sus empleados sobre las mejores prácticas de
            seguridad cibernética, ya que los empleados pueden ser a menudo el
            eslabón más débil de una empresa. Al adoptar un enfoque proactivo de
            la seguridad cibernética, las empresas pueden reducir el riesgo de
            intrusiones de datos, proteger su reputación y asegurar su futuro en
            la era digital. Aplicamos políticas, brindamos cursos y mecanismos
            de seguridad eficientes y robustas que le brindan la tranquilidad de
            tener todos los puntos de riesgos cubiertos.
          </p>
        </div>
      </section>
      <div className={styles.container_end}>
        <h2>
          Deje su infraestructura en manos de expertos, sin preocuparse de los
          recursos.
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
  );
}
