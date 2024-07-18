import styles from './RecentCard.module.css'

export default function RecentCard({ id, img, title, date, handleViews }) {
    return (
        <div id={id} onClick={handleViews} className={styles.recent}>
            <div className={styles.image}>
                {
                    img
                        ?
                        <img src={img} alt={`image${id}`} />
                        :
                        <></>
                }
            </div>
            <div className={styles.body}>
                <p>{title}</p>
                <span>{date}</span>
            </div>
        </div>
    )
}