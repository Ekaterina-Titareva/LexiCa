import { useState } from 'react';
import FooterForm from './FooterForm/FooterForm';
import styles from './footer.module.css'
import React from 'react';

function Footer() {
    // const [isForm, getForm] = useState(true);
    // const handleGetForm = () => {
    //     getForm(false)
    // }
    return (
        <footer>
            {/* { isForm ?
            <p onClick={handleGetForm} className={styles.getForm}>Report an issue you are having with our site</p>
            :
            <FooterForm />
            } */}
        </footer>
    )
}

export default Footer;