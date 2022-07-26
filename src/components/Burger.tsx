import React, { useState } from 'react';

export const Burger = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleBurgerActive = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            onClick={handleBurgerActive}
            className={isActive ? 'hamburger hamburger--squeeze is-active' : 'hamburger hamburger--squeeze'}
            type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
};
