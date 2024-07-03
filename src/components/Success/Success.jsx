import styles from './Success.module.css'

export default function Success({ handleViews }) {
    return (
        <div className={styles.success}>
            <h3>Mensaje enviado!</h3>
            <button id='' onClick={handleViews}>Volver</button>
        </div>
    )
}