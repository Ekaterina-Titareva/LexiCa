import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Если Вы столкнулись с проблемой на сайте, напишите, пожалуйста, на почту: <a className={styles.link} href="mailto:ekaterina.titareva.ca@gmail.com">ekaterina.titareva.ca@gmail.com</a> </p>
        </footer>
    )
}

export default Footer;