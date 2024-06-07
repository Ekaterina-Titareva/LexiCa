import { useEffect, useState } from 'react';
import styles from './sign.module.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';

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
    return listen();
}, []);
function userSignOut() {
    signOut(auth)
    .then(() => console.log("Успех"))
    .catch((e) => console.log(e))
}


    return (
        <div>
            {authUser ? (
                <div>
                <p>Вы зашли в аккаунт ${authUser.email}</p>
                <button onClick={userSignOut} className={styles.formLink}>Выйти</button>
            </div>
            ) : (<p>Вы вышли из аккаунта</p>)}
</div>
    )
}

export default AuthDetails;