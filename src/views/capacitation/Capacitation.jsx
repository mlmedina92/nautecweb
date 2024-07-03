import styles from './Capacitacion.module.css'
import { useState } from 'react';
import * as validate from '../../Validations/validations'

export default function Capacitation() {
    const [errors, setErrors] = useState(false);

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setErrors(validate[property](value))
    }

    return (
        <div className={styles.capacitation}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>Capacitación</h1>
                <p className={styles.paragraph}>Brindamos capacitaciones adaptando el contenido, la duración y el horario, para que sus empleados puedan obtener un mayor beneficio de capacitación en base a sus necesidades. No es necesario tener conocimiento previo para ninguno de nuestros cursos.</p>
            </div>
            <h1 className={styles.title}>Cursos</h1>
            <div className={styles.course_container}>
                <div className={styles.course}>
                    <h2 className={styles.subtitle}>GNU/Linux</h2>
                    <p className={styles.paragraph}>Aprenda a manejar y administrar el OS Servidor más utilizado. Puede optar por diferentes niveles de capacitación. Inicial - Medio - Avanzado</p>
                </div>
                <div className={styles.course}>
                    <h2 className={styles.subtitle}>Virtualización</h2>
                    <p className={styles.paragraph}>Sepa todo sobre virtualización y las herramientas que puede utilizar para pequeñas implementaciones, hasta las más robustas y complejas del mercado.</p>
                </div>
                <div className={styles.course}>
                    <h2 className={styles.subtitle}>Aplicaciones y Escritorios Virtualizados con Citrix</h2>
                    <p className={styles.paragraph}>Virtualice de manera completa el Workspace y trabaje de manera remota desde donde esté. En este curso aprenderá sobre la tecnología más utilizada.</p>
                </div>
                <div className={styles.course}>
                    <h2 className={styles.subtitle}>Contenedores</h2>
                    <p className={styles.paragraph}>Los contenedores son una herramienta de vital importancia para entornos de desarrollo y producción. Permiten el despliegue y actualización rápida de Microservicios. Inicie en este mundo con nosotros y mejore el flujo de trabajo de su empresa.</p>
                </div>
                <div className={styles.course}>
                    <h2 className={styles.subtitle}>Networking</h2>
                    <p className={styles.paragraph}>Curso de redes para aprender como implementar, administrar y hacer troubleshooting de su arquitectura de red.</p>
                </div>
                <div className={styles.course}>
                    <h2 className={styles.subtitle}>Seguridad</h2>
                    <p className={styles.paragraph}>Aprenda todo lo que hay que saber para administrar la seguridad de su empresa y la información. Aprendiendo a actuar de manera proactiva y eficiente contra amenazas cibernéticas.</p>
                </div>
            </div>



            <div className={styles.form_container}>
                <legend className={styles.title}>Comunícate con nosotros </legend>
                <form action="mailer.php" className={styles.form}>
                    <input onChange={handleChange} type="text" name="nameCap" id="nameCap" placeholder='Nombre*' required />
                    {errors?.name ? <p className={styles.errMessage}>{errors.name}</p> : <></>}
                    <input onChange={handleChange} type="tel" name="phoneCap" id="phoneCap" placeholder='Teléfono*' required />
                    {errors?.phone ? <p className={styles.errMessage}>{errors.phone}</p> : <></>}
                    <input onChange={handleChange} type="email" name="emailCap" id="emailCap" placeholder='Correo electrónico*' required />
                    {errors?.email ? <p className={styles.errMessage}>{errors.email}</p> : <></>}
                    <textarea name="message" id="messageCap" placeholder='Estoy interesado en'></textarea>
                    <button className={styles.btn_send} type="submit">Enviar</button>
                </form>
            </div>



            <h2 className={styles.subtitle}>Nautec. Tecnología Simplificada.</h2>
        </div>
    )
}