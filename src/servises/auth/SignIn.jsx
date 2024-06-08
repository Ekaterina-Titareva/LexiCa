import { useState } from 'react';
import styles from './sign.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    function login (e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail("");
                setPassword("")
                setError("");
                navigate('/');
            })
            .catch((error) => {
                console.log(error)
                setError("Извините, Ваш аккаунт не найден")
            });
        }
    return (
        <div>
            <form
            className={styles.uiForm}>
            <h2>Войти на сайт</h2>
            <div className={styles.formRow}>
                <input 
                placeholder='Email'
                type="text" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                autoComplete="off" />
            </div>
            <div className={styles.formRow}>
                <input 
                placeholder='Пароль'
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                autoComplete="off"/>
            </div>
            <button 
                onClick={login}
                className={styles.formButton} 
                type="submit">
                    Войти
            </button>
            {error ? <p>{error}</p> : ""}
            <Link className={styles.formLink} to={'/signup'}>Зарегистрироваться</Link>
            </form>
        </div>
    )
}

export default SignIn;