import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'


function App() {

  return (
    <>

      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path="/" element={<ItemListContainer/>}/>

          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>

          <Route path="/item/:id" element={<ItemDetailContainer/>}/>

          <Route path="*" element={<Error/>}/>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
