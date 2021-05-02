import React from 'react';

function Portfolio() {
    const [project] = useState([
        {
            name: 'Test Project',
            link: 'www.google.com',
            imgId: 1
        },
        {
            name: 'Test Project',
            link: 'www.google.com',
            imgId: 1
        },
        {
            name: 'Test Project',
            link: 'www.google.com',
            imgId: 1
        }
    ])

    const projectList = project.map((project) =>
        <li>
            <h2>{project.name}</h2>
            <a href={project.link} target='blank' rel='noreferrer'>
                Link
    </a>
            <a href={project.link} target='blank' rel='noreferrer'>
                GitHub Link
    </a>
        </li>
    )
    return (
        <section>
            <h1>Portfolio</h1>
            <div className='flex-row'>
                <ul>
                    {projectList}
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;