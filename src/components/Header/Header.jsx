import styles from './Header.module.css';

import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/people" >People</NavLink></li>
                <li><NavLink to="/not-found" >Not found</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;