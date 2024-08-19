import { useState } from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const addToCart = () => {
        alert(`Agregaste ${count} items al carrito`)
    }

  return (
    <div className='itemCount'>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={addToCart}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount
