import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState("")

    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await fetch('/productos.json')
            const data = await response.json()
            const newProduct = data.find(p => p.id === id)
            setProduct(newProduct)
          }catch(error){
            console.log(error)
          }
        }
    
        fetchData()
      }, [id])

  return (
    <div>

        {product == undefined ? <Spinner/> : <ItemDetail products={product}/>}

    </div>
  )
}

export default ItemDetailContainer
