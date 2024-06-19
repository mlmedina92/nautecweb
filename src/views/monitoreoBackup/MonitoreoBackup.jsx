import styles from "./MonitoreoBackup.module.css";

export default function MonitoreoBackup() {
  return (
    <div className={styles.services}>
      <h1 className={styles.title}>Monitoreo y Backup</h1>
      <div className={styles.presentation}>
        Contar con un sistema de monitoreo y política de backup confiables y
        eficientes, protege a su empresa contra eventos inesperados, garantiza
        la continuidad del negocio, aumenta la eficiencia y reduce pérdidas
        financieras. Diseñamos estrategias para brindarles la tranquilidad que
        su empresa necesita.
      </div>

      <h2 className={styles.title}>Nuestros Servicios</h2>
      <section className={styles.container}>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Monitoreo_Backup/monitoreo-backup-2.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Resguardo de la información</h2>
          <p>
            Los eventos inesperados, ataques cibernéticos, errores humanos o
            fallas en los sistemas, pueden interrumpir las operaciones
            comerciales y causar grandes pérdidas. Es importante poder
            recuperarse rápidamente y volver a funcionar, minimizando el impacto
            de tales eventos. Esto ayuda a mantener la continuidad del negocio,
            protegiendo su reputación y garantizando que sigan cumpliendo las
            necesidades de sus clientes.
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Recuperación ante desastres</h2>
          <p>
            Es fundamental considerar las situaciones más extremas, como
            desastres naturales, incidentes a nivel local o problemas con
            proveedores, que pueden generar no solo una interrupción temporal,
            sino también la imposibilidad de restaurar los servicios de manera
            rápida. Para hacer frente a estos desafíos, es esencial contar con
            un Plan de Recuperación ante Desastres o DRP(Disaster Recovery
            Plan). Para ayudarlo en esta tarea, ofrecemos soluciones completas
            que incluyen la planificación, la implementación y la verificación
            de su Plan de Recuperación
          </p>
        </div>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Monitoreo_Backup/monitoreo-backup-1.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
      </section>

      {/* banner */}

      <div className={styles.banner}>
        <img
    
          src="/Imagenes/Servicios/Monitoreo_Backup/banner.png"
          alt="imagen banner"
          loading="lazy"
        />

        <h2 className={styles.title_banner}>
          Tener una buena estrategia de respaldo aumenta la confianza y
          seguridad de sus clientes, brindándoles confianza y estabilidad.
        </h2>
      </div>

      <section className={styles.container}>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Monitoreo_Backup/monitoreo-backup-3.png"
            alt="img servicio"
            loading="lazy"
          />
        </div>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>
            Monitoreo de Sistemas, Servicios, Aplicaciones y Plataformas
          </h2>
          <p>
            Monitorear la infraestructura, permite detectar problemas antes de
            que se conviertan en situaciones críticas y causen pérdidas
            significativas. Alerta a los equipos de IT para que puedan corregir
            los problemas antes de que afecten a los usuarios finales y causen
            interrupciones en las operaciones de la empresa. Ayuda a detectar y
            prevenir posibles amenazas a la seguridad, lo que protege a la
            empresa y sus activos valiosos. Puede ver en todo momento el estado
            de sus servicios e infraestructura, generar reportes, identificar
            problemas recurrentes para aplicar soluciones más eficientes. Esté
            informado en todo lugar y en todo momento con integraciones para
            alertar por mensajería SMS, Whatsapp, Telegram, sistemas
            colaborativos como Slack, Teams, sistemas de gestión de incidencias
            de todo tipo y muchas opciones más
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.paragraph_service}>
          <h2 className={styles.subtitle}>Centro de Control de Operaciones</h2>
          <p>
            Los sistemas funcionan las 24 horas y la mayor complejidad se
            presenta en los horarios no laborables donde las incidencias
            críticas las resuelve una o varias personas de guardia. Esta
            solución es la ideal cuando el sistema de alertamiento solo no
            alcanza, ya que se requiere un tiempo de acción mucho más rápido y
            efectivo. Contamos con un equipo especializado en identificar y
            gestionar incidencias, contactando telefónicamente a la guardia
            encargada de la resolución, efectuando el seguimiento de principio a
            fin del incidente. Permite tener una vista panorámica de la
            infraestructura y los servicios que se prestan, lo que facilita la
            toma de decisiones informadas en tiempo real y mejora la capacidad
            de la empresa para responder rápidamente a los problemas.
          </p>
        </div>
        <div className={styles.paragraph_img}>
          <img
            className={styles.img_div}
            src="/Imagenes/Servicios/Monitoreo_Backup/monitoreo-backup-4.png"
            alt="img servicio"
            loading="lazy"
          />
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
