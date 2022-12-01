import React from 'react';
import resume from '../../images/HollisJustin_Resume.pdf';

export const Resume = () => {
  return (
    <div className='d-flex justify-content-center m-2'>
      <object
        id='resume'
        data={resume}
        type='application/pdf'
        width='850px'
        height='1150px'
        aria-label='Résumé'
      />
    </div>
  );
};
