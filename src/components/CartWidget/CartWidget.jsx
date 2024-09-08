import './CartWidget.css'
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getTotalProducts } = useContext(CartContext)
    return (
        <Link to={"/cart"} className="cart">
            <FaCartShopping />
            {getTotalProducts() === 0 ? null : getTotalProducts()} 
        </Link>
    )
}

export default CartWidget