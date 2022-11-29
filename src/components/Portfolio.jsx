import React from 'react';
import { projects } from '../utils/projects';
import { Project } from './Project';

export const Portfolio = () => {
  return (
    <section className='row'>
      <h1 className='fs-1 fw-bold m-2 d-flex justify-content-center'>
        Portfolio
      </h1>
      
      {projects.map((projects, id) => (
        <Project key={id} {...projects} />
      ))}
    </section>
  );
};

//inside the section element {projects.map(project => <Project {...projects}/>)}
