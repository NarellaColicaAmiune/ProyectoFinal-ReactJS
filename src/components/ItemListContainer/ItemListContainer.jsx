import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('/productos.json')
        const data = await response.json()
        const filteredProducts = categoriaId ? data.filter((p) => p.categoria === categoriaId) : data;
        setProducts(filteredProducts)

      }catch(error){
        console.log(error)
      }finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [categoriaId])


    return (
      <div className="container">
          <h1>{greeting}</h1>

          {loading ? <Spinner/> : <ItemList products={products}/>}
          
      </div>
    )
  }
  
  export default ItemListContainer