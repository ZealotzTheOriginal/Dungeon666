import { Link } from "react-router-dom"
import NavbarGradient from "./NavbarGradient"
import Meme from "./Meme"
import Header from "./Header"

export default function Navbar() {
    return (
        <>
        {/* <Header /> */}
        <nav className="NavbarPro">
            <img className="NavbarIMG" src="https://i.pinimg.com/736x/7b/53/7b/7b537badd795dcc738c93fd3e2915511.jpg" alt="" />
            <div className="NavbarIMG_Decoration_Inverted"><Meme/></div>
            <Link to='/' className="NavbarLinkPro">HOME</Link>
            <Link to='/party' className="NavbarLinkPro">PARTY</Link>
            <Link to='/gate' className="NavbarLinkPro">THE GATE</Link>
            <div className="NavbarIMG_Decoration"><Meme/></div>
            <div className="NavbarIMG_Eraser"/>
        </nav>
        <NavbarGradient/>
        </>
    )
}