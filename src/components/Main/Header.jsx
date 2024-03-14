import styles from './header.module.css'

function Header() {
return (
    <h1>
        Expand your vocabulary with <span className={styles.logo}>LexiCa🍁</span> - where words come to life!
    </h1>
)
}

export default Header;