import React from 'react';
import logo from '../images/JH_logo3-removebg-preview.png'

export const Footer = () => {
  return (
    <footer
      className='fixed-bottom'
      style={{ backgroundColor: '#343a40', color: 'white', marginTop: '3rem', fontSize: '18px' }}
    >
      <img className='m-2' src={logo} alt='LOGO test'></img>Justin Hollis
    </footer>
  );
};
