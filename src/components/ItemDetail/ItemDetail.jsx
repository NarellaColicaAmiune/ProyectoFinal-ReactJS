import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({products}) => {
  return (

    <div className='productContainer'>
      <div className='imgContainer'>
        <img src= {products.img} alt={products.nombre}/>
      </div>

      <div className='detailContainer'>
        <h2>{products.nombre}</h2>
        <p>{products.descripcion}</p>
        <p><strong>${products.precio}</strong></p>
        <ItemCount initial={1} stock={products.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail
