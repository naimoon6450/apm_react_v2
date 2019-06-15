// will probably have state to manage number within the tabs

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { userCount } = props;
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">Users({userCount ? userCount : 0})</Link>
                <Link to='/managers' className="navbar-item">Managers()</Link>
                <Link to='/create' className="navbar-item">Create User</Link>
            </div>
        </nav>
    )
}

export default Navbar;