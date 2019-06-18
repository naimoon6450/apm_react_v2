import React, { Component } from 'react'
import UserCard from './UserCard'


const Users  = (props) => {
    const {users, history, location} = props;
    return (
        <div id="users">
            {users.map(user => {
                return <UserCard key={user.id} user={user} location={location} history={history} />
            })}
        </div>
    )
}

export default Users;