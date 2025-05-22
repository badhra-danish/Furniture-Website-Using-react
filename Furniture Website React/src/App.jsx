import { useState } from 'react'
import './css/App.css'
import './css/About.css'
import './index.css'
import './css/Gallery.css'
import './css/ContactUs.css'
import './css/services.css'
import { BrowserRouter as Router ,Route,Routes  } from 'react-router-dom'
import LayOut from './components/Layout'
import Home from './components/homePage'
import AboutUs from './components/Aboutus/aboutUs'
import Gallery from './components/Gallery/gallery'
import ContactUs from './components/ContactUs/Contact'
import Services from './components/servicePage/Service'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LayOut/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          </Route>  
        </Routes>
      </Router>
    </>
  )
}

export default App
