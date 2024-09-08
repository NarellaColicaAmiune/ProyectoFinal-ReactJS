import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { Link } from 'react-router-dom'
import './CartDetail.css'

const CartDetail = ({cart}) => {

  const { getTotal, getTotalProducts, removeItem, cleanCart, buy } = useContext(CartContext)

  return (
    <div className="cartContainer">
      <h2 className="cartTitle">Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item.products.id} className="cartItem">
          <img src={item.products.img} alt={item.products.name} className="imgCart"/>
          <p>{item.products.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.products.price}</p>
          <p>Total: ${item.products.price * item.quantity}</p>
          <button onClick={() => removeItem(item.products.id)}>Eliminar</button>
        </div>
      ))}

      <div className="cartTotal">
        <h3 className="cartTitle"> Total productos: {getTotalProducts()}</h3>
        <h3 className="cartTitle">Total a pagar: ${getTotal()}</h3>
      </div>
      
      <div className="cartButtons">
        <Link to={"/checkout"} className="linkComprar">Comprar</Link>
        <button onClick={cleanCart}>Vaciar carrito</button>
      </div>
    </div>
  )
}

export default CartDetail
