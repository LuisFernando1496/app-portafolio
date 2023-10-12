import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  // Contact,
   Experience,
   Works,
  //  Tech,
  // Feedbacks,
  // Tech,
  
  // StarsCanvas,
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience/>
        <Works/>
        <div className="relative z-0">

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App