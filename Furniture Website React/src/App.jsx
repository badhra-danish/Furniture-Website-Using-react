import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header/header'
import HomeSection from './components/Home/Hero'
import AuthenticSction from './components/Home/authentic'
import InspirationSection from './components/Home/inspiration'
import BrowseRangeSection from './components/Home/browserangesection'
import HowItsWorkSection from './components/Home/howitswork'
import EmailListSection from './components/Home/emailistsection'
import Footer from './components/Footer/footer'


function App() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <AuthenticSction/>
      <InspirationSection/>
      <BrowseRangeSection/>
      <HowItsWorkSection/>
      <EmailListSection/>
      <Footer/>
    </>
  )
}

export default App
