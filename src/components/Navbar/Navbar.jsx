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
                        <NavLink to="/categoria/mermeladas-caseras" activeClassName="active">Mermeladas Caseras</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/frutos-secos" activeClassName="active">Frutos Secos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/aromaticas" activeClassName="active">Aromáticas</NavLink>
                    </li>
                </ul>
            </div>

            <CartWidget/>
        </nav>
    )
}

export default Navbar