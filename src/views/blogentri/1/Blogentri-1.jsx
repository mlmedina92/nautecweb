import styles from './Blogentri-1.module.css'
import { IoIosArrowBack } from "react-icons/io";
import RecentCard from '../recentCards/RecentCard';
// import { useState } from 'react';
// import * as validate from '../../../Validations/validations'

export default function BlogEntry1({ handleViews }) {
    // const [errors, setErrors] = useState(false);

    // const handleChange = (event) => {
    //     const property = event.target.name
    //     const value = event.target.value
    //     setErrors(validate[property](value))
    // }
    return (
        <div className={styles.blogEntry}>
            <h1 className={styles.header}>Nautec Blog</h1>
            <div className={styles.general_container}>
                <div className={styles.content_container}>
                    <span id='blog' onClick={handleViews} className={styles.back_btn}><IoIosArrowBack /> Todas las publicaciones</span>
                    <div className={styles.entry_info}>
                        <h2>Nautec Consultora de Sistemas</h2>
                        <span>14 de marzo de 2023</span>
                    </div>
                    <p>
                        <img id='' onClick={handleViews} src="Imagenes\Logo.png" alt="nautec" />
                        Nada mejor para nuestra primera nota del blog, que hacernos una introducción a nosotros mismos. <br /> <br /> Nautec es una empresa con más de 10 años en el mercado y formada por profesionales que llevan más de 20 trabajando en el rubro, ayudando a las empresas a adoptar nuevas tecnologías, mejorando viejas y facilitando el funcionamiento de IT. <br /> <br /> Brindamos diversos servicios para pequeña, mediana y gran empresa, adaptándonos a las necesidades que cada una presenta en las diferentes etapas en la que se encuentre. Siempre con el objetivo puesto en ser sus socios tecnológicos efectuando cuanta acción podamos para brindarles todo lo necesario para crecer o adaptarse.
                    </p>
                    <br />
                    <p>Cubrimos desde la base de la pirámide de IT, brindando una mesa de ayuda para asistir a los usuarios, hasta el punto más alto ofreciendo Gerenciamiento de IT y Arquitectura de Soluciones. En nuestra cartera de soluciones podrán encontrar:</p>
                    <br />
                    <ul>
                        <li>Monitoreo</li>
                        <li>Backup</li>
                        <li>Outsourcing de IT</li>
                        <li>Consultoría de IT</li>
                        <li>Seguridad</li>
                        <li>Desarrollo e integración de aplicaciones</li>
                        <li>Networking</li>
                        <li>Virtualización</li>
                        <li>Cloud Computing</li>
                        <li>Soporte a estaciones de trabajo (Endpoints)</li>
                        <li>Recuperación ante desastres</li>
                        <li>Project Management</li>
                        <li>Capacitaciones</li>
                    </ul>
                    <br />
                    <p>Gracias a todos estos servicios brindados, podemos cubrir todas las áreas necesarias para que su empresa funcione en óptimas condiciones, optimizando los procesos y brindando la tranquilidad de tener sus aplicaciones y sistemas 100% funcionales y disponibles en todo momento.</p>
                    <br />
                    <p>Como todos los profesionales de IT de la vieja escuela, nuestra reticencia a las redes se vio, indefectiblemente opacada por las adaptaciones que el mercado va marcando en el último tiempo, donde todo está cada vez más orientado a las redes sociales.</p>
                    <br />
                    <p>Por tal motivo decidimos actualizarnos tanto a nivel web, como con las redes sociales y comenzar con el Blog, tema que siempre rondó nuestras mentes, pero absorbidos por el día a día, fuimos relegando hasta hoy.</p>
                    <br />
                    <p>Nuestro blog nace con el objetivo de brindar información y soluciones no solo a nuestros pares en el rubro, sino también para todo tipo de usuarios que quieran despejarse dudas o encontrar soluciones a sus problemas.</p>
                    <br />
                    <p>Esperamos que disfruten leer nuestras notas y puedan sacarle el mayor provecho a cada una.</p>
                    <br />
                    <p>Por último, los invitamos a suscribirse a nuestro newsletter para mantenerse informados de las novedades.</p>
                </div>
                <div className={styles.recent_container}>
                    <h3>Publicaciones recientes</h3>
                    <RecentCard
                        id={"proveedor-de-tecnologia-vs-socio-tecnologico"}
                        img={""}
                        title={"Proveedor de tecnología vs Socio tecnológico"}
                        date={"19 de septiembre de 2023"}
                        handleViews={handleViews}
                    />
                    <RecentCard
                        id={"que-son-las-best-practice"}
                        img={"Imagenes/Blog/BlogEntries/blog-entry-1.png"}
                        title={"¿Qué son las Best Practice?"}
                        date={"17 de marzo de 2023"}
                        handleViews={handleViews}
                    />
                </div>
            </div>
            {/* <div className={styles.form_container}>
                <legend className={styles.subtitle}>Suscribirse</legend>
                <form action="" className={styles.form}>
                    <div>
                        <input onChange={handleChange} type="email" name="email" id="email" placeholder='Correo electrónico*' required />
                        {errors?.email ? <p className={styles.errMessage}>{errors.email}</p> : <></>}
                    </div>
                    <button className={styles.btn_send} type="submit">Enviar</button>
                </form>
            </div> */}
        </div>
    )
}