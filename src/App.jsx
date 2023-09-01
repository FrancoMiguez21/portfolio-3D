import { BrowserRouter } from "react-router-dom"

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App