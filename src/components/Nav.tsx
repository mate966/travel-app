import React from 'react';
import { Social } from './Social';
import { Menu } from './Menu';
import { Image } from './Image';
import { Burger } from './Burger';

export const Nav: React.FC = () => (
    <nav className='nav'>
        <div className="nav__container wrapper">
            <div className="nav__left">
                <Image />
            </div>
            <div className="nav__right">
                <Menu />
                <Social />
                <Burger />
            </div>
        </div>
    </nav>
);
