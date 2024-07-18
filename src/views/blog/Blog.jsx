import styles from './Blog.module.css'
import CardsBlog from '../../components/cardsblog/Cardsblog'
import { useState } from 'react';
import * as validate from '../../Validations/validations'

export default function Blog({ handleBlog }) {
    // const [errors, setErrors] = useState(false);

    // const handleChange = (event) => {
    //     const property = event.target.name
    //     const value = event.target.value
    //     setErrors(validate[property](value))
    // }
    return (
        <div className={styles.blog}>
            <div className={styles.header}>
                <h1 className={styles.title}>Nautec Blog</h1>
                <div className={styles.cards_container}>

                    <CardsBlog
                        handleBlog={handleBlog}
                        id={"proveedor-de-tecnologia-vs-socio-tecnologico"}
                        img={""}
                        date={"19 de septiembre de 2023"}
                        title={"Proveedor de tecnología vs Socio tecnológico"}
                    />

                    <CardsBlog
                        handleBlog={handleBlog}
                        id={"que-son-las-best-practice"}
                        img={"Imagenes/Blog/BlogEntries/blog-entry-1.png"}
                        date={"17 de marzo de 2023"}
                        title={"¿Qué son las Best Practice?"}
                    />

                    <CardsBlog
                        handleBlog={handleBlog}
                        id={"nautec"}
                        img={"Imagenes/Logo.png"}
                        date={"14 de marzo de 2023"}
                        title={"Nautec Consultora de Sistemas"}
                    />

                </div>
            </div>
{/* 
            <div className={styles.form_container}>
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