import { Link } from "react-router-dom"
import styles from '../components_styles/Pages_Navbar.module.css';
import Meme from "./Meme_DanceGuys"

export default function Navbar() {
    return (
        <>
        <nav className={styles.NavbarPro}>

            <div className={styles.NavbarIMG_Eraser}/>
            <div className={styles.GIF_Navbar_Guy_Inverted}><Meme/></div>
            <Link to='/HOME' className={styles.NavbarLinkPro}>HOME</Link>
            <Link to='/PARTY' className={styles.NavbarLinkPro}>PARTY</Link>
            <Link to='/CONSOLE' className={styles.NavbarLinkPro}>CONSOLE</Link>
            <div className={styles.GIF_Navbar_Guy}><Meme/></div>
            <div className={styles.NavbarIMG_Eraser}/>

        </nav>
        </>
    )
}