import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
return (
    <>
    <h1>
        Expand your vocabulary with <span className={styles.logo}>LexiCa🍁</span> - where words come to life!
    </h1>
    <nav>
        <ul>
            <li><Link to={'/LexiCa/'}>Home</Link></li>
            <li><Link to={'/LexiCa/game'}>Game</Link></li>
        </ul>
    </nav>
    </>
)
}

export default Header;