import styles from './Blogentri-2.module.css'
import { IoIosArrowBack } from "react-icons/io";
import RecentCard from '../recentCards/RecentCard';
// import { useState } from 'react';
// import  as validate from '../../../Validations/validations'

export default function BlogEntry2({ handleViews }) {
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
                        <h2>¿Qué son las Best Practices?</h2>
                        <span>17 de marzo de 2023</span>
                    </div>
                    <p>
                        <img id='' onClick={handleViews} src="Imagenes\Blog\BlogEntries\blog-entry-1.png" alt="nautec" />
                        Sin importar el rubro, el producto o servicio, escuchamos reiteradas veces esta frase, pero… <strong>¿Qué es? ¿Cuál es la importancia de estas “Best Practices”?</strong><br /><br />Las best practice o mejores prácticas, son un conjunto de recomendaciones que nos permiten entender como utilizar de forma correcta algo. Por ejemplo, cuando compramos un auto nuevo viene con su respectivo manual en el cual nos indican como utilizar de forma correcta todas las funciones que tiene, para que su durabilidad sea la que indica el fabricante y poder sacar el mejor provecho de dicho auto. Puede ser cambiar el aceite cada X cantidad de kilometraje o tiempo, hasta como configurar el aire para que climaticemos el auto a nuestro gusto.
                    </p>
                    <br />
                    <p>En sistemas esto lo vemos en equipos y software implementado dentro y fuera de la empresa teniendo un impacto muy alto en la calidad de los servicios internos y externos, provocando dolores de cabeza a los usuarios y directivos por la degradación del servicio y el mal funcionamiento del sistema. Vamos a listar solo una parte de los beneficios de implementar estas buenas prácticas, como para dimensionar mejor su impacto.</p>
                    <br />
                    <ul>
                        <li><strong>Prevención de errores:</strong> Evita que los sistemas fallen por una mala configuración o por no disponibilizar los recursos necesarios para que funcione correctamente. Esto termina generando una mala experiencia de usuario tanto interno como externo.</li>
                        <li><strong>Experiencia de usuario:</strong> Hoy en día un usuario que tiene una mala experiencia con un sistema o aplicación en el 80% de los casos implica que dejará de utilizarla y además le recomendará a sus contactos no hacerlo. Con lo cual mejorar esta parte tiene un impacto económico muy alto para las empresas ya que dependen del consumo. También mejora el ambiente laboral y la productividad, ya que tener sistemas funcionando correctamente y brindando una buena experiencia al usuario agiliza las tareas, pudiendo completarlas en menos tiempo y dando lugar a generar nuevas oportunidades de negocio.</li>
                        <li><strong>Disminución de gastos:</strong> No aplicarlas muchas veces conlleva a necesitar más recursos para que funcionen y cada recurso adicional es un gasto que podría ser evitado. En muchas oportunidades al no aplicarlas compramos más servidores para mejorar el rendimiento, cunado en la gran mayoría de oportunidades con solo implementar estas prácticas nos ahorramos la necesidad y en algunas ocasiones hasta podemos prescindir de recursos permitiendo redireccionar gastos a situaciones más críticas.</li>
                        <li><strong>Seguridad:</strong> La implementación de buenas prácticas esta muy relacionada con la seguridad de la información, prevención de ataques como el más conocido del último tiempo ransomware y evita cientos de brechas que permiten a un atacante o malware acceder a la empresa y vulnerar su información, funcionamiento y servicios.</li>
                    </ul>
                    <br />
                    <p><u>Hay muchos más beneficios, pero enumerarlos a todos haría de esta nota interminable. En este punto muchos se preguntarán como hacer para validar si estas prácticas están implementadas en sus respectivas empresas.</u></p>
                    <br />
                    <p>La manera de identificar este tipo de situaciones es efectuar un Health Check o Chequeo de salud de la infraestructura de sistemas. Para este fin se contrata a una empresa tercerizada que coordinando con el grupo de trabajo interno de la empresa realizará todos los chequeos necesarios. Finalizado este relevamiento se arma un documento indicando que está acorde a las mejores prácticas y que se debe corregir. Adicionalmente pueden armar un presupuesto para implementar estas mejoras ya sea que el grupo de trabajo interno no disponga del tiempo o del conocimiento.</p>
                    <br />
                    <p><em>Es muy importante no manejarlo con el grupo interno de trabajo ya que un Consultor externon será objetivo con el diagnóstico.</em></p>
                    <br />
                    <h3><u>¡No te quedes con la duda y valida tus sistemas!</u></h3>
                    <br />
                    <p>Desde <strong>Nautec</strong>, contamos con un equipo de especialistas en diferentes plataformas y ofrecemos un <strong>Health Check básico y orientativo</strong>, de manera <strong><u>completamente gratuita</u></strong>. Este servicio pueden solicitarlo desde nuestro <u id='contacto' onClick={handleViews} className={styles.link}>formulario web</u> y se pondrá a la brevedad un comercial y un técnico para entender sus necesidades y armar el plan de acción. </p>
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
                        id={"nautec"}
                        img={"Imagenes/Logo.png"}
                        title={"Nautec Consultora de Sistemas"}
                        date={"14 de marzo de 2023"}
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