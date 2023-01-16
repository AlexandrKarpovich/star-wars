import {NavLink, Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.wrapper}>
           <Header />

            <main className="contain">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout;