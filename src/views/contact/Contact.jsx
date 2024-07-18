import styles from './Contact.module.css'
import { useState } from 'react'
import * as validate from '../../Validations/validations'

export default function Conctact({ handleViews }) {
    const [errors, setErrors] = useState(false);

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setErrors(validate[property](value))
    }

    return (

        <div className={styles.container_general}>
            <div>
                <h2 className={styles.title}>Seguinos en nuestras redes</h2>
                <a href="https://www.instagram.com/nautec.it" target='_blank' rel="noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial"><g><path fill="#E1306C" d="M12 2c5.523 0 10 4.476 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10C2 6.478 6.478 2 12 2z"></path><path fill="#fff" fillRule="evenodd" d="M17.762 14.335c.025-.45.038-1.262.038-2.435s-.013-1.985-.038-2.435c-.052-1.066-.37-1.89-.953-2.474-.584-.584-1.408-.901-2.474-.953C13.885 6.013 13.073 6 11.9 6s-1.985.013-2.435.038c-1.066.052-1.89.37-2.474.953-.584.584-.901 1.408-.953 2.474C6.013 9.915 6 10.727 6 11.9s.013 1.985.038 2.435c.052 1.066.37 1.89.953 2.474.584.584 1.408.901 2.474.953.45.025 1.262.038 2.435.038s1.985-.013 2.435-.038c1.066-.052 1.89-.37 2.474-.953.584-.584.901-1.408.953-2.474zM11.9 7.06l-.588-.004a41.691 41.691 0 00-.81 0c-.185.003-.432.01-.742.023a6.09 6.09 0 00-.79.077 3.08 3.08 0 00-.55.142 1.993 1.993 0 00-.676.446c-.195.195-.343.42-.446.676a3.08 3.08 0 00-.142.55 6.09 6.09 0 00-.077.79c-.012.31-.02.557-.023.742-.002.184-.002.454 0 .81l.004.588-.004.588c-.002.356-.002.626 0 .81.003.185.01.432.023.742s.039.573.077.79c.039.219.086.402.142.55a2.001 2.001 0 001.122 1.122c.148.056.332.103.55.142.217.038.48.064.79.077.31.012.557.02.742.023.184.002.454.002.81 0l.588-.004.588.004c.356.002.626.002.81 0 .185-.003.432-.01.742-.023a6.09 6.09 0 00.79-.077c.219-.039.402-.086.55-.142a2.001 2.001 0 001.122-1.122c.056-.148.103-.332.142-.55a6.09 6.09 0 00.077-.79c.012-.31.02-.557.023-.742.002-.184.002-.454 0-.81l-.004-.588.004-.588c.002-.356.002-.626 0-.81-.003-.185-.01-.432-.023-.742a6.09 6.09 0 00-.077-.79 3.083 3.083 0 00-.142-.55 1.993 1.993 0 00-.446-.676 1.992 1.992 0 00-.676-.446 3.08 3.08 0 00-.55-.142 6.09 6.09 0 00-.79-.077 28.51 28.51 0 00-.742-.023 41.691 41.691 0 00-.81 0l-.588.004zm3.65 2.19a.68.68 0 00.207-.5.68.68 0 00-.208-.5.68.68 0 00-.5-.207.68.68 0 00-.499.208.68.68 0 00-.207.5c0 .194.07.36.207.499a.68.68 0 00.5.207.68.68 0 00.5-.207zm-.623 2.65c0 .84-.295 1.554-.884 2.143a2.918 2.918 0 01-2.143.884c-.84 0-1.554-.295-2.143-.884a2.918 2.918 0 01-.884-2.143c0-.84.295-1.554.884-2.143a2.919 2.919 0 012.143-.884c.84 0 1.554.295 2.143.884.59.589.884 1.303.884 2.143zm-1.06 0a1.89 1.89 0 00-.577-1.39 1.895 1.895 0 00-1.39-.577c-.543 0-1.006.192-1.39.576a1.895 1.895 0 00-.577 1.391c0 .543.192 1.006.576 1.39.385.385.848.577 1.391.577s1.006-.192 1.39-.577a1.89 1.89 0 00.577-1.39z"></path></g></svg>
                </a>
                <div>
                </div>

                <div className={styles.two_col}>
                    <div className={styles.form_container}>
                        <legend className={styles.subtitle}>Comunicate con nosotros </legend>
                        <form action="mailer.php" className={styles.form}>
                            <input onChange={handleChange} type="text" name="nameCon" id="nameCon" placeholder='Nombre*' required />
                            {errors?.name ? <p className={styles.errMessage}>{errors.name}</p> : <></>}
                            <input onChange={handleChange} type="tel" name="phoneCon" id="phoneCon" placeholder='Teléfono*' required />
                            {errors?.phone ? <p className={styles.errMessage}>{errors.phone}</p> : <></>}
                            <input onChange={handleChange} type="email" name="emailCon" id="emailCon" placeholder='Correo electrónico*' required />
                            {errors?.email ? <p className={styles.errMessage}>{errors.email}</p> : <></>}
                            <textarea name="messageCon" id="messageCon" placeholder='Mensaje*'></textarea>
                            <input onChange={handleChange} type="text" name="preferenceCon" id="preferenceCon" placeholder='Preferencia de contacto*' required />
                            {errors?.preference ? <p className={styles.errMessage}>{errors.preference}</p> : <></>}
                            <button className={styles.btn_send} type="submit">Enviar</button>
                        </form>
                    </div>

                    <div className={styles.text}>
                        <h4>Nautec</h4>
                        <a href="mailto:info@nautec.com.ar"><span>info@nautec.com.ar</span></a>
                        <br />
                        <a href="tel:+54 11 5217-9050"><span>+54 11 5217-9050</span></a>
                        <br />
                        <br />
                        <p>Estocolmo 2794 PB C, Tres de Febrero, Buenos Aires, Argentina.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}