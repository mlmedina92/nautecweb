import styles from './Cardsblog.module.css'

export default function CardsBlog({ id, img, date, title, handleBlog }) {
    return (
        <div id={id} onClick={handleBlog} className={styles.card}>
            <div className={styles.card_img}>
                {
                    img
                        ?
                        <img src={img} alt="entry" />
                        :
                        <></>
                }
            </div>
            <div className={styles.card_content}>
                <p className={styles.card_date}>{date}</p>
                <h3 className={styles.card_title}>{title}</h3>
                <p id={id} className={styles.card_footer}>Continuar leyendo</p>
            </div>
        </div>
    )
}