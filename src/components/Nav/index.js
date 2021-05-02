import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
      } = props;

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="logo"> 🩸</span> J.R.C. Prospero
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(true); setContactSelected(false); setPortfolioSelected(false); setResumeSelected(false) }}>
                            About Me
                                </span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(false); setPortfolioSelected(true); setContactSelected(false);  setResumeSelected(false) }}>
                            Portfolio
                                </span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(false); setPortfolioSelected(false); setContactSelected(true); setResumeSelected(false) }}>
                            Contact
                                </span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => { setAboutSelected(false); setContactSelected(false); setPortfolioSelected(false); setResumeSelected(true) }}>
                            Resume
                                </span>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Nav;
