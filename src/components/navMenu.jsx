import React from 'react';
import './navMenu.css'; // Make sure to create this CSS file
import Button from './button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const location = useLocation();
    
    const getButtonState = (path) => {
        return location.pathname === path ? 'selected' : 'enabled';
    };

    const renderButton = (path, label) => (
        <Link to={path}>
            <Button 
                props={{ 
                    variant: props.background === 'black' ? 'dark' : 'default', 
                    state: getButtonState(path), 
                    label: label 
                }} 
            />
        </Link>
    );

    return (
        <nav className='aligning'>
            <ul className="navbar">
                <li>{renderButton('/', 'Home')}</li>
                <li>{renderButton('/about-me', 'About Me')}</li>
                <li>{renderButton('/experiences', 'Experiences')}</li>
                <li>{renderButton('/services', 'Services')}</li>
                <li>{renderButton('/projects', 'Projects')}</li>
                <li>{renderButton('/contact', 'Contact')}</li>
            </ul>
        </nav>
    );
};

export default Navbar;
