import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">La Perla</Link>
            </div>

            <div className="navbar-links">
                <ul>
                    <li>
                        <NavLink to="/category/mermeladas-caseras" className={({isActive}) => isActive ? "link active" : "link"}>Mermeladas Caseras</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/frutos-secos" className={({isActive}) => isActive ? "link active" : "link"}>Frutos Secos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/aromaticas" className={({isActive}) => isActive ? "link active" : "link"}>Aromáticas</NavLink>
                    </li>
                </ul>
            </div>

            <CartWidget/>
        </nav>
    )
}

export default Navbar