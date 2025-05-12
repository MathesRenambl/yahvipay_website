import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Review from '../components/Review'
import AssociatedPartners from '../components/AssociatedPartners'
import { About } from '../components/About'
import { Features } from '../components/Features'
import { FAQ } from '../components/FAQ'
import { ContactUs } from '../components/ContactUs'
import { Footer } from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection 
        title = {'Empowering your business with seamless payment, anytime, anywhere YahviPay Download Our App'}
        displayBanner = {true}
        displayDownload = {true}
      />
      <About />
      <Features />
      <Review />      
      <FAQ />
      <ContactUs />
      <AssociatedPartners />
      <Footer />
    </div>
  )
}

export default LandingPage
