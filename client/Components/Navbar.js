// will probably have state to manage number within the tabs

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { users } = props;
    const managerIds = []
    users.forEach((user, idx) => {
        user.managerId && !managerIds.includes(user.managerId) && managerIds.push(user.managerId)
    })
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' replace className="navbar-item">Users ({users.length ? users.length : 0})</Link>
                <Link to='/managers' className="navbar-item">Managers ({managerIds.length ? managerIds.length : 0})</Link>
                <Link to='/create' className="navbar-item">Create User</Link>
            </div>
        </nav>
    )
}

export default Navbar;