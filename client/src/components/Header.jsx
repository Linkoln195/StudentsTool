import classes from "./Header.module.css"
import logo from "../assets/Images/studentLogo.png"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className={classes.headerBox}>
            <div className={classes.logoBox}>
                <Link to="/" className={classes.link}><img src={logo} className={classes.logoImg}></img></Link>
            </div>
            <div className={classes.linksBox}>
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="students" className={classes.link}>All Students</Link>
            </div>
        </div>
    )
}

export default Header