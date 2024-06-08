import styles from './header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import AuthDetails from '../../servises/auth/AuthDetails';

function Header() {
return (
    <header className={styles.header}>
        <Link to={'/'}>
            <div className={styles.logoI}>
                <div className={styles.imgWrapper}>
                    <img  className={styles.img} src={logo} alt='logo'/>
                </div>
                <h1 className={styles.logoName}>LexiCa</h1>
            </div>
        </Link> 
        <h2 className={styles.logoText}>Ваш помощник в запоминании английских слов</h2>
    <nav>
        <ul>
            <li><Link className={styles.link} to={'/'}>Список слов</Link></li>
            <li><Link className={styles.link} to={'/game'}>Тренировка</Link></li>
            
        </ul>
    </nav>
    < AuthDetails />
    </header>
)
}

export default Header;