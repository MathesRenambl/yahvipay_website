import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsAndConditions } from './pages/TermsAndConditions'
import { Careers } from './pages/Careers'

function App() {

  return (
    <div className = "bg-white p-0">
      <Routes>
        <Route path='/' element = {<LandingPage />}/>        
        <Route path='/privacypolicy' element = {<PrivacyPolicy />}/>
        <Route path='/termsandconditions' element = {<TermsAndConditions />}/>
        <Route path='/careers' element = {<Careers />}/>
      </Routes>      
    </div>
  )
}

export default App
