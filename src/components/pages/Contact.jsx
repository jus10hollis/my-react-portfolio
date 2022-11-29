import React from 'react';

export const Contact = () => {
  return (
      <section className='d-flex row justify-content-center p-22 m-5'>
        <div><h1 className='d-flex row justify-content-center'>Contact</h1></div>
      <div className='d-flex justify-content-center p-22 m-5'>
        <form className='needs-validation'>
        <div className='mb-3'>
          <label htmlFor='fullName' className='form-label'>
            Name
          </label>
          <input type='name' className='form-control' id='fullName1' required />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            required
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label className='input-group'>Message</label>
          <textarea type='text' className='form-control' id='messageInput' required />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      </div>
      
    </section>
  );
};
