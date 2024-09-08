import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (

    <Link to={`/item/${item.id}`}>
      <div key={item.id} className="card">
        <img src={item.img} alt={item.name} />
        <h2>{item.name}</h2>
        <p><strong>${item.price}</strong></p>
    </div>
    </Link>

  )
}

export default Item
