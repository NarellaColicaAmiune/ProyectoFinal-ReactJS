import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import CartDetail from '../CartDetail/CartDetail'

const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div>

      {cart.length === 0 ? (
        <p>No hay elementos en el carrito</p>
      ) : (
        <>
          <CartDetail cart={cart}/>
        </>
      )}
      
    </div>
  )
}

export default Cart
