import React from 'react';
import { Document } from 'react-pdf'


export const Resume = () => {
  return (
    <section className='d-flex justify-content-center p-22 m-5'>
      <Document file="./images/Resume_Justin_Hollis.pdf" />
    </section>
  );
};
