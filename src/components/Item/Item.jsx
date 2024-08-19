import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (

    <Link to={`/item/${item.id}`}>
      <div key={item.id} className="card">
        <img src={item.img} alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p><strong>${item.precio}</strong></p>
    </div>
    </Link>

  )
}

export default Item
