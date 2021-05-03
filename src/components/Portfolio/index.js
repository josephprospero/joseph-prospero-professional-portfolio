import React, { useState } from 'react';

function Portfolio() {
    return (
        <section>
            <h1>Previous Projects</h1>
            <div className='flex-row project-1 project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>The Bloc</h2>
                        <a href='https://the-bloc.herokuapp.com/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/jcc83267/Hrd-Cpy' target='blank' rel='noreferrer'>
                            GitHub 
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <div className='flex-row project-2 project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>Budget Tracker</h2>
                        <a href='https://boiling-taiga-76045.herokuapp.com/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/josephprospero/budget-tracker' target='blank' rel='noreferrer'>
                            GitHub 
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <div className='flex-row project-3 project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>Weather Dashboard</h2>
                        <a href='https://josephprospero.github.io/weather-dashboard/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/josephprospero/weather-dashboard' target='blank' rel='noreferrer'>
                            GitHub 
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <div className='flex-row project-4 project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>Food For You</h2>
                        <a href='https://josephprospero.github.io/food-for-you/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/josephprospero/food-for-you' target='blank' rel='noreferrer'>
                            GitHub 
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <div className='flex-row project-5 project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>Workday Scheduler</h2>
                        <a href='https://josephprospero.github.io/scheduler/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/josephprospero/scheduler' target='blank' rel='noreferrer'>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <div className='flex-row project-6 project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>Run Buddy</h2>
                        <a href='https:/josephprospero.github.io/run-buddy/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/josephprospero/run-buddy' target='blank' rel='noreferrer'>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;