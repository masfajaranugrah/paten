import React from 'react'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Service from './Components/Service'
import About from './Components/About'
import Counter from './Components/Counter'
// import Prortfolio from './Components/Prortfolio'
import Work from './Components/Work'
import Pricing from './Components/Pricing'
import Testimoni from './Components/Testimoni'
// import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Whatsapp from './Components/Whatsapp'
 
const App = () => {
  return (
    <div>
      <Navbar/>
        <Banner/>
        <Service/>
        <About/>
        <Counter/><Pricing/>
        {/* <Prortfolio/> */}
         <Work/>
        
        <Testimoni/>
        <Whatsapp/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
