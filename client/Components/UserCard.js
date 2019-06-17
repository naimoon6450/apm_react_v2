import React, {Component} from 'react'
import Users from './Users'
import axios from 'axios'

export default class UserCard extends Component {

    constructor() {
        super()
        this.state = {
            users: [],
            currentUser: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('/api/users')
        .then(raw => this.setState({users: raw.data}))
        .catch(e => console.error(e));
    }

    handleChange(e) {
        this.setState({currentUser: e.target.value})
    }

    handleSave(managerObj, user) {
        // will associate the name with selected manager
        const contentToSend = {
            managedUser: user,
            managerId: managerObj ? managerObj.id : null,
            managerName: managerObj ? managerObj.name : null
        }
        console.log(contentToSend)
        axios.put(`/api/users/${user.id}`, contentToSend)
        .then(resp => console.log(resp.data))
        .catch(e => console.log(e));
    }

    render() {
        const {user} = this.props;
        const {currentUser, users} = this.state;
        const userIdObj = {};
        let defaultName = '';
        users.forEach(userObj => {
            if (userObj.id = user.managerId) {
                defaultName = userObj.name
            }
        })
        return(
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">{user.name}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p>Manages X users</p>
                        <br />
                        <div className="control has-icons-left">
                            <div className="select">
                                <select form='selectManager' value={user.managerId ? defaultName : currentUser} onChange={this.handleChange}>
                                    <option>None</option>
                                    {users.map(manager => {
                                        userIdObj[manager.name] = {manager}
                                        // user can't be their own manager
                                        if (manager.name !== user.name) {
                                            return <option key={manager.id + manager.name} value={manager.name}>{manager.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                            <span className="icon is-medium is-left">
                                <i className="fa fa-user-secret" />
                            </span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item" onClick={() => this.handleSave(userIdObj[currentUser], user)}>Save</a>
                    <a className="card-footer-item">Delete</a>
                </footer>
            </div>
        )
    }
}