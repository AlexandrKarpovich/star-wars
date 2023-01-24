import {useLocation} from "react-router";
import styles from './NotFoundPageю.module.css';
import img from './img/not-found.png';


const NotFoundPage = () => {
    let location = useLocation();

    return (
        <>
            <img className={styles.img} src={img} alt="not found"/>
            <p className={styles.text}>Not match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage;