import React from 'react';
import { projects } from '../utils/projects';

export const Portfolio = ({}) => {
    return <section>
        {projects.map(project => <Project {...projects}/>)}
    </section>
}


//inside the section element {projects.map(project => <Project {...projects}/>)}