import React from 'react';



export const Project = ({ url, title, github, description, id, logo }) => {
  return (
    <div
      className='card mx-auto'
      style={{
        width: '18rem',
        margin: '2rem',
        display: 'flex',
        borderColor: '#d9e2ef',
        borderWidth: '2px',
      }}
      key={id}
    >
      <img className='img-thumbnail bg-secondary m-2' src={logo} alt='logo'>
        {logo.id}
      </img>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href={url} className='card-link'>
          Deployed Project
        </a>
        <a href={github} className='card-link'>
          Github Repo
        </a>
      </div>
    </div>
  );
};
