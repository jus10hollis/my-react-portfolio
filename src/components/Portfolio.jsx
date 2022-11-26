import React from 'react';
import { projects } from '../utils/projects';
import { Project } from './Project';

export const Portfolio = () => {
    return <section>
        <h1>Portfolio</h1>
        {projects.map(project => <Project {...projects}/>) }
    </section>
}


//inside the section element {projects.map(project => <Project {...projects}/>)}