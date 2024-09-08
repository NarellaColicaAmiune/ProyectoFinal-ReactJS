import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

  return (
    <div className='itemCount'>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)} disabled={stock === 0}>
        Añadir al carrito
      </button>
      {stock === 0 && <p>No hay stock disponible</p>}
    </div>
  )
}

export default ItemCount
