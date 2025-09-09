// import "./styles.css"
import styles from "./Card.module.scss"
import spider from "../../assets/img/spider-man.png"
import logo from "../../assets/img/logo-spider-man.png"

export const Card = ({ nombre, estatura, edad }) => {
    return (

        <div className={styles.card}>
            <div className={styles.card_name}>
                <span>{nombre}</span>
            </div>
            <img className={styles.spider} src={spider} alt="Spider man" />
            <div className={styles.card_info}>
                <div className={styles.estatura}>
                    <span>{estatura}</span>
                </div>

                <div className={styles.card_logo_container}>
                    <img className={styles.card_logo} src={logo} alt="" />
                </div>

                <div className={styles.edad}>
                    <span>{edad}</span>
                </div>
            </div>
        </div>

    )
}