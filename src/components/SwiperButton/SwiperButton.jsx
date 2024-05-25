import styles from './swiperButton.module.css'

const SwiperButton = (props) => {
    return (
    <button 
        onClick={props.handleClick}
        disabled={props.currentIndex}
        className={styles.button}>
        <img src={props.arrow} alt="arrow" />
    </button>
    )

}

export default SwiperButton