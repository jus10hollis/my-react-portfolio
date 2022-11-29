import React from 'react';

export const About = ({ pages }) => {
  return (
    <section>
      <h1 className='fs-1 fw-bold d-flex justify-content-center'>
        About me
      </h1>
      <main className='m-5'>
        <p className='mb-5 justify-content-center p-22'>
          Justin specializes in policy research, demography, data science, and
          economic analysis. Justin is a 2022 recipient of the Wilder Foundation's Kingston
          Fellowship and plans to obtain a Full Stack Web Development
          Certificate from the University of Minnesota College of Continuing and
          Professional Studies. He is interested in growing this skill set
          primarily because it is in high demand across our office, among
          prospective clients, and in the field of research and evaluation for
          human services. Justin’s goal is to create more responsive, more
          respectful approaches to developing software and web application
          solutions for researchers, evaluators, and policy analysts in the
          human services and research fields. He holds a master’s degree in economics
          from the University of New Mexico, and a bachelor’s degree in
          economics from the University of St. Thomas.
        </p>
      </main>
    </section>
  );
};
