import { BrowserRouter } from "react-router-dom";

import { About, Partners, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] min-h-screen particle-bg'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b]/10 via-[#4ecdc4]/10 to-[#45b7d1]/10 animate-pulse"></div>
          <Navbar />
          <Hero />
        </div>
        <div className="slide-in-up">
          <About />
        </div>
        <div className="slide-in-left">
          <Partners />
        </div>
        <div className="slide-in-right">
          <Experience />
        </div>
        <div className="slide-in-up">
          <Tech />
        </div>
        <div className="slide-in-left">
          <Works />
        </div>
        <div className="slide-in-right">
          <Feedbacks />
        </div>
        <div className='relative z-0 slide-in-up'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
