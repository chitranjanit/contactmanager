import React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

const  Header = (props ) =>{
    return (
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <Link className="py-2" to="/">
                    My App
                </Link>
                <Link className="py-2 d-none d-md-inline-block" to="/">Home</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/add">Add</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/about">About Us</Link>
            </div>
        </nav>
    )
}

Header.defaultProps={
    branding:PropTypes.string.isRequired
}


export default Header;
