import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div className="App">
      <Nav contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        >
      </Nav>
      <main>
        <About></About>
      </main>
    </div>

  );
}

export default App;