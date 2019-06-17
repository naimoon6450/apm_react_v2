import React, { Component } from 'react'
import UserCard from './UserCard'


const Users  = (props) => {
    const {users} = props;
    return (
        <div id="users">
            {users.map(user => {
                return <UserCard key={user.id} user={user} />
            })}
        </div>
    )
}

export default Users;