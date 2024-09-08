import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext/CartProvider'
import { Link } from 'react-router-dom'

const ItemDetail = ({products}) => {

  const { addItems, cart, getProductsQuantityInCart } = useContext(CartContext)
  const [showItemCount, setShowItemCount] = useState(true);
  
  const onAdd = (quantity) => {
    addItems(products, quantity)
    setShowItemCount(false);
  }

  const quantityInCart = getProductsQuantityInCart(products.id);
  const availableStock = products.stock - quantityInCart;

  return (

    <div className='productContainer'>
      <div className='imgContainer'>
        <img src= {products.img} alt={products.name}/>
      </div>

      <div className='detailContainer'>
        <h2>{products.name}</h2>
        <p>{products.description}</p>
        <p>Stock: {products.stock}</p>
        <p><strong>${products.price}</strong></p>

        {availableStock <= 0 ? (
          <p>No hay stock disponible</p>
        ) : (
          <>
          {products.stock === 0 ? (
            <p>No hay stock</p>
          ) : (
            <>
              {showItemCount ? (
            <ItemCount initial={1} stock={products.stock} onAdd={onAdd}/>
          ) : (
            <Link to="/cart">Ir al carrito</Link>
          )}
          </>
        )}
          </>
        )}
        

        
      </div>
    </div>
  )
};

export default ItemDetail
