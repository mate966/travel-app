import React from 'react';
import logo from '../assets/images/logo.png';

export const Image = () => (
    <figure className='image'>
        <picture className="logo">
            <img src={logo} alt="Logo Travely" />
        </picture>
    </figure>
);
