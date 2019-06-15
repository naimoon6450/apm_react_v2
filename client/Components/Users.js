import React, { Component } from 'react'
import UserCard from './UserCard'
import axios from 'axios'

export default class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('/api/users')
        .then(raw => this.setState({users: raw.data}))
        .catch(e => console.error(e));
    }

    render() {
        return(
            <div id="users">
                {this.state.users.map(user => {
                    return <UserCard key={user.id} user={user} allUsers={this.state.users} />
                })}
            </div>
        )
    }
}