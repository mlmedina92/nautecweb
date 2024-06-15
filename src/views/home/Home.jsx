
import styles from "./Home.module.css";

export default function Home() {
  return (
   <div >
    <main className={styles.home}>
        <img src="Imagenes/Home/home/main.PNG" alt="Banner" loading="lazy"/>
            <h1>Servicios</h1>
        <div className={styles.services}>
            <div className={styles.card}>
                <img src="" alt="card" />
                <h5>Infraestructura</h5>
                <p>Soporte para servidores y estaciones de trabajo.</p>
                <button>Más información</button>
            </div>
            <div className={styles.card}>
                <img src="" alt="card" />
                <h5>Monitoreo y Backup</h5>
                <p>Mantenga sus datos resguardados ante fallos.</p>
                <button>Más información</button>
            </div>
            <div className={styles.card}>
                <img src="" alt="card" />
                <h5>Management</h5>
                <p>Gerenciamiento IT integral de su departamento.</p>
                <button>Más información</button>
            </div>
            <div className={styles.card}>
                <img src="" alt="card" />
                <h5>Software</h5>
                <p>Desarrollo de aplicaciones e integraciones a medida</p>
                <button>Más información</button>
            </div>
        </div>
        <h1>Consultoría IT</h1>
        <div className={styles.consulting}>
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />
        <img src="" alt="Consultoria" loading="lazy" />

        </div>
        <h1>¿Por qué elegirnos?</h1>
        <div>
            <div><p> Contamos con excelentes profesionales dedicados a brindar el mejor servicio.</p></div>
            <div><p> Con más de 10 años en el mercado y amplia experiencia en diversos rubros como son Aeronáutico, Bancario, Obras Sociales y Automotriz entre los principales. </p></div>
            <div><p> Gracias a esto entendemos a la perfección las diferentes necesidades, reglamentaciones y políticas que se manejan, adaptando Nautec a sus necesidades.</p></div>
        </div>
        

    </main>
   </div>
  );
}
