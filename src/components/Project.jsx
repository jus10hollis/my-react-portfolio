import React from 'react';

export const Project = ({ url, title, github, description, id }) => {
  return (
    <div
      className='card mx-auto'
      style={{ width: '18rem', margin: '5rem', display: 'flex' }}
      key={id}
    >
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
