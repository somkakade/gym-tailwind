
import './App.css'
import About from './components/About/About'
import About1 from './components/About/About1'
import About2 from './components/About/About2'
import CallToAction from './components/Contact/CallToAction'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/GetStarted'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Testimonial from './components/Testimonials/Testimonial'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <About1/>
      <About2/>
      <CallToAction/>
      <Pricing/>
      <GetStarted/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
