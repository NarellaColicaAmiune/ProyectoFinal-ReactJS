import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='cards-container'>
      {products.map((item) => (
        <Item key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default ItemList
