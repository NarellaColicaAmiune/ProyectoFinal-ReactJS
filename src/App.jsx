import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import CartProvider from './context/CartContext/CartProvider'
import Cart from './components/Cart/Cart'
import { db } from './main'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const db = getFirestore();

    const ItemsCollection = collection(db, "item");

    getDocs(ItemsCollection).then((snapShot) => {

      setProducts(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
  }, []);  


  return (
    <>
        
      <CartProvider>

        <BrowserRouter>

          <Navbar/>

            <Routes>

              <Route path="/" element={<ItemListContainer/>}/>

              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>

              <Route path="/item/:id" element={<ItemDetailContainer/>}/>

              <Route path="/cart" element={<Cart/>}/>

              <Route path="/checkout" element={<Checkout/>}/>

              <Route path="*" element={<Error/>}/>

            </Routes>

          <Footer/>

        </BrowserRouter>

      </CartProvider>

    </>
  )
}

export default App
