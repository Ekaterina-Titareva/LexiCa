import styles from './header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/leaf.svg'

function Header() {
return (
    <header className={styles.header}>
    <div className={styles.logo}>
        <h2 className={styles.logoText}>Expand your vocabulary with</h2>
        <Link to={'/'}>
            <div className={styles.logoI}>
                <div className={styles.imgWrapper}>
                    <img  className={styles.img} src={logo} alt='logo'/>
                </div>
                <h1 className={styles.logoName}>LexiCa</h1>
            </div>
        </Link> 
        <h2 className={styles.logoText}>where words come to life!</h2>
    </div>
    <nav>
        <ul>
            <li><Link className={styles.link} to={'/'}>Home</Link></li>
            <li><Link className={styles.link} to={'/game'}>Game</Link></li>
        </ul>
    </nav>
    </header>
)
}

export default Header;