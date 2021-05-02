import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div className="App">
      <main>
        <Nav>
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        </Nav>
        <About></About>
      </main>
    </div>

  );

}

export default App;