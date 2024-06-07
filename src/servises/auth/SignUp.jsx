import { useState } from 'react';
import styles from './sign.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");
    const [error, setError] = useState("");
    function register (e) {
        e.preventDefault()
        if (copyPassword !== password) {
            setError("Пароли не совпадают");
            return
        } createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail("");
                setPassword("")
                setCopyPassword("");
                setError("");
            })
            .catch((error) => console.log(error));
        }
    return (
        <div>
            <form 
            onSubmit={register}
            className={styles.uiForm}>
            <h2>Регистрация</h2>
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
            <div className={styles.formRow}>
                <input 
                placeholder='Повторите пароль'
                type="password" 
                id="copyPassword" 
                value={copyPassword}
                onChange={(e) => setCopyPassword(e.target.value)}
                required 
                autoComplete="off"/>
            </div>
            <button className={styles.formLink} type="submit">Зарегистрироваться</button>
            {error ? <p>{error}</p> : ""}
            </form>
        </div>
    )
}

export default SignUp;