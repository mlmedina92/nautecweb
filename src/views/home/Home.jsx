import styles from "./Home.module.css";
import Carrousel from "../../components/carrousel/Carrousel";


export default function Home({ handleViews }) {
    return (
        <div>
            <main className={styles.home}>
                <img className={styles.banner} src="Imagenes/Home/home/main.PNG" alt="Banner" loading="lazy" />
                <h1 className={styles.title}>Servicios</h1>
                <div className={styles.services}>
                    <div className={styles.card}>
                        <img className={styles.card_image} src="Imagenes/Home/home/services/service-1.PNG" alt="card" />
                        <h2 className={styles.card_title}>Infraestructura</h2>
                        <p className={styles.card_p}>Soporte para servidores y estaciones de trabajo.</p>
                        <button id="infraestructura" onClick={handleViews} className={styles.card_button}>Más información</button>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_image} src="Imagenes/Home/home/services/service-2.PNG" alt="card" />
                        <h2 className={styles.card_title}>Monitoreo y Backup</h2>
                        <p className={styles.card_p}>Mantenga sus datos resguardados ante fallos.</p>
                        <button id="monitoreo-backup" onClick={handleViews} className={styles.card_button}>Más información</button>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_image} src="Imagenes/Home/home/services/service-3.PNG" alt="card" />
                        <h2 className={styles.card_title}>Management</h2>
                        <p className={styles.card_p}>Gerenciamiento IT integral de su departamento.</p>
                        <button id="management" onClick={handleViews} className={styles.card_button}>Más información</button>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.card_image} src="Imagenes/Home/home/services/service-4.PNG" alt="card" />
                        <h2 className={styles.card_title}>Software</h2>
                        <p className={styles.card_p}>Desarrollo de aplicaciones e integraciones a medida</p>
                        <button id="software" onClick={handleViews} className={styles.card_button}>Más información</button>
                    </div>
                </div>
                <h1 className={styles.title}>Consultoría IT</h1>
                <div className={styles.consulting}>
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-1.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-2.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-3.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-4.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-5.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-6.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-7.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-8.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-9.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-10.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-11.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-12.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-13.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-14.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-15.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-16.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-17.PNG" alt="Consultoria" loading="lazy" />
                    <img className={styles.const_image} src="Imagenes/Home/home/consultoriait/const-it-18.PNG" alt="Consultoria" loading="lazy" />
                </div>
                <h1 className={styles.title}>¿Por qué elegirnos?</h1>
                <div className={styles.why_us}>
                    <div><p className={styles.text}> Contamos con excelentes profesionales dedicados a brindar el mejor servicio.</p></div>
                    <div><p className={styles.text}> Con más de 10 años en el mercado y amplia experiencia en diversos rubros como son Aeronáutico, Bancario, Obras Sociales y Automotriz entre los principales. </p></div>
                    <div><p className={styles.text}> Gracias a esto entendemos a la perfección las diferentes necesidades, reglamentaciones y políticas que se manejan, adaptando Nautec a sus necesidades.</p></div>
                </div>
                <h1 className={styles.title}>Confían en Nosotros</h1>
            </main>
            <div className={styles.carousel}>
                <Carrousel></Carrousel>
            </div>
        </div>
    );
}
