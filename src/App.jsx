import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Item from './components/Item'
import CartWidget from './components/CartWidget'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

const App = () => {
  return(


<BrowserRouter>
    <Navbar />

    <Routes>

    <Route exact path='/' element={<ItemListContainer/>}/>
    <Route exact path='/ItemDetail' element={<ItemDetail/>}/>
    <Route exact path='/product/:id' element={<ItemDetailContainer />}/>
    <Route exact path='/category/:category' element={<ItemListContainer/>}/>
    <Route exact path='/cart' element={<Cart/>} />


      
    </Routes>

    </BrowserRouter>

    )

}

export default App
