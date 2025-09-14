import { BrowserRouter } from "react-router-dom";

import { About, Partners, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-bg-primary to-bg-secondary min-h-screen particle-bg'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-r from-ond-red/10 via-ond-teal/10 to-ond-blue/10 animate-pulse"></div>
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
