import styles from './Blogentri-3.module.css'
import { IoIosArrowBack } from "react-icons/io";
import RecentCard from '../recentCards/RecentCard';
import { useState } from 'react';
import * as validate from '../../../Validations/validations'

export default function BlogEntry3({ handleViews }) {
    const [errors, setErrors] = useState(false);

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setErrors(validate[property](value))
    }
    return (
        <div className={styles.blogEntry}>
            <h1 className={styles.header}>Nautec Blog</h1>
            <div className={styles.general_container}>
                <div className={styles.content_container}>
                    <span id='blog' onClick={handleViews} className={styles.back_btn}><IoIosArrowBack /> Todas las publicaciones</span>
                    <div className={styles.entry_info}>
                        <h2>Proveedor de tecnología vs Socio tecnológico</h2>
                        <span>19 de septiembre de 2023</span>
                    </div>
                    <p>
                        Cada vez que me encuentro frente a un profesional o empresa que ofrece servicios a Nautec me pregunto: ¿es un proveedor o un socio? La pregunta parece no tener mucho sentido tomada a la ligera, pero si hacemos zoom podemos ver el trasfondo del asunto.
                    </p>
                    <br />
                    <p>Cuando se contrata un servicio se está en busca de una solución, sin importar el rubro. Ahora bien, hay diversas situaciones dentro de la categoría de necesidad, tantas como tipos de clientes pueden haber. Tal vez yo, como proveedor de servicios y consultoría, tenga la solución para el problema que mi cliente busca, pero ¿es esta la mejor solución? ¿Es la única? ¿Cómo comparan las distintas soluciones que hay disponibles en el mercado en relación a la situación específica de mi cliente? ¿Cuál es el futuro de esta solución y de mi cliente utilizándola? </p>
                    <br />
                    <p>Me hago constantemente estas preguntas cuando en Nautec ofrecemos una solución tecnológica porque en estas consideraciones se juega la diferencia entre un proveedor de tecnología y un socio tecnológico. Mientras que el proveedor de tecnología busca vender un producto o servicio a quien esté dispuesto a comprarlo, el socio tecnológico analiza la situación con el cliente, obtiene información del negocio, se dedica a comprender la situación particular de esa necesidad, realiza consultas, evalúa la proyección de la compañia y, finalmente, brinda la mejor solución posible. Un socio tecnológico es aquel que acerca la tecnología a sus clientes de una forma proactiva y eficiente, sin sobredimensionamientos, sin laberintos técnicos. Simple y eficiente es lo que nos proponemos a diario en Nautec. Acompañamos tecnológicamente a nuestros clientes de forma simple y eficiente.</p>
                </div>
                <div className={styles.recent_container}>
                    <h3>Publicaciones recientes</h3>
                    <RecentCard
                        id={"que-son-las-best-practice"}
                        img={"Imagenes/Blog/BlogEntries/blog-entry-1.png"}
                        title={"¿Qué son las Best Practice?"}
                        date={"17 de marzo de 2023"}
                        handleViews={handleViews}
                    />
                    <RecentCard
                        id={"nautec"}
                        img={"Imagenes/Logo.png"}
                        title={"Nautec Consultora de Sistemas"}
                        date={"14 de marzo de 2023"}
                        handleViews={handleViews}
                    />
                </div>
            </div>
            <div className={styles.form_container}>
                <legend className={styles.subtitle}>Suscribirse</legend>
                <form action="" className={styles.form}>
                    <div>
                        <input onChange={handleChange} type="email" name="email" id="email" placeholder='Correo electrónico*' required />
                        {errors?.email ? <p className={styles.errMessage}>{errors.email}</p> : <></>}
                    </div>
                    <button className={styles.btn_send} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}