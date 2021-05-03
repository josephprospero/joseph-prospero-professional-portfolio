import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const style = {
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "75px",
    width: "100%",
  };

  return (
    <div>
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
        {aboutSelected
          ? (<><About></About></>)
          : (<></>)
        }
        {portfolioSelected
          ? (<><Portfolio></Portfolio></>)
          : (<></>)
        }
        {contactSelected
          ? (<><ContactForm></ContactForm></>)
          : (<></>)
        }
        {resumeSelected
          ? (<><Resume></Resume></>)
          : (<></>)
        }
        <footer className='App' style={style}>
        © Joseph R.C. Prospero 2021
        <br/>
        <a href='https://github.com/josephprospero' target='blank'>
        🖥️ GitHub
        </a>
        <a href='https://www.linkedin.com/in/williamhgates/' target='blank'>
        🌐 LinkedIn
        </a>
        <a href='https://twitter.com/dozedoff__' target='blank'>
        🍆 Twitter
        </a>
      </footer>
      </main>

    </div>

  );
}

export default App;