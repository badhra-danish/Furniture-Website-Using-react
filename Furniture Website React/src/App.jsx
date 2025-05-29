import { useState } from 'react'
import './css/App.css'
import './css/About.css'
import './index.css'
import './css/Gallery.css'
import './css/ContactUs.css'
import './css/services.css'
import './css/productcard.css'
import { BrowserRouter as Router ,Route,Routes  } from 'react-router-dom'
import LayOut from './components/Layout'
import Home from './pages/homePage'
import AboutUs from './pages/Aboutus/aboutUs'
import Gallery from './pages/Gallery/gallery'
import Product from './pages/Product/Product'
import ContactUs from './pages/ContactUs/Contact'
import Services from './pages/servicePage/Service'
import Cart from  './pages/Cartsection/Cart'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LayOut/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Route>  
        </Routes>
      </Router>
    </>
  )
}

export default App
