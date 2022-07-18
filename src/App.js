import React from 'react'
import './App.css'
import AboutUs from './components/AboutYs'
import DailyPrices from './components/DailyPrices'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newletter'
import Roadmap from './components/Roadmao'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import SignUp from './components/SignUp'
const App = () => {
  return (
    <div>
        <ScrollToTop/>
        <Navbar/>
        <Home/>
        <DailyPrices/> 
        <AboutUs/>
        <Services/>
        <SignUp/>
        <Roadmap/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default App