import React, { useState } from 'react';
import bloc2 from '../../assets/images/bloc2.png'
import bloc from '../../assets/images/bloc.png'
import budget from '../../assets/images/budget.png'
import foodforyou from '../../assets/images/food-for-you.png'
import runbuddy from '../../assets/images/run-buddy.png'
import scheduler from '../../assets/images/scheduler.jpeg'
import weatherdash from '../../assets/images/weatherdash.jpg'

function Portfolio() {
    return (
        <section>
            <h1>Previous Projects</h1>
            <div 
            style={{backgroundImage: `url(${bloc2})`}} 
            className='flex-row  project-background fill'
            >
                <ul>
                    <li>
                        <h2 className='project-title'>The Bloc version 2.0</h2>
                        <a href='https://the-bloc.herokuapp.com/' target='blank' rel='noreferrer'>
                            Link
                        </a>
                        <br/>
                        <a href='https://github.com/jmrendon48/bloc-2.0' target='blank' rel='noreferrer'>
                            GitHub 
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <div 
            style={{backgroundImage: `url(${bloc})`}} 
            className='flex-row project-background fill'>
                <ul>
                    <li>
                        <h2 className='project-title'>The Bloc</h2>
                        <a href='https://bloc-v1.herokuapp.com/' target='blank' rel='noreferrer'>
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
            <div 
            style={{backgroundImage: `url(${budget})`}} 
            className='flex-row project-background fill'>
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
            <div 
            style={{backgroundImage: `url(${weatherdash})`}} 
            className='flex-row project-background fill'>
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
            <div 
            style={{backgroundImage: `url(${foodforyou})`}} 
            className='flex-row project-background fill'>
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
            <div 
            style={{backgroundImage: `url(${scheduler})`}} 
            className='flex-row project-background fill'>
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
            <div 
            style={{backgroundImage: `url(${runbuddy})`}} 
            className='flex-row project-background fill'>
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