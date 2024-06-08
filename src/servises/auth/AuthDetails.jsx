import { useEffect, useState } from 'react';
import styles from './sign.module.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect (() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null)
        }
    });
    return () => listen();
}, []);
function userSignOut() {
    signOut(auth)
    .then(() => console.log("Успех"))
    .catch((e) => console.log(e))
}


    return (
        <div className={styles.authWrapper}>
            {authUser ? (
                <>
                <p>Вы зашли в аккаунт {authUser.email}</p>
                    <button onClick={userSignOut} className={styles.formButton}>Выйти</button>
                </>
            ) : (
            <Link className={styles.formButton} to={'/signin'}>Войти</Link>
            )}
        </div>
    )
}

export default AuthDetails;