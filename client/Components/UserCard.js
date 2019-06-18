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
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount() {
        axios.get('/api/users')
        .then(raw => this.setState({users: raw.data}))
        .catch(e => console.error(e));
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({currentUser: e.target.value})
    }

    handleSave(managerObj, user) {
        // will associate the name with selected manager
        let content;
        managerObj ? content = {
            managedUser: user,
            managerId: managerObj.id,
            managerName: managerObj.name
        }
        : content = ''

        axios.put(`/api/users/${user.id}`, content)
        .then(resp => console.log(resp.data))
        .catch(e => console.log(e));
    }

    render() {
        const {user} = this.props;
        const {currentUser, users} = this.state;
        const userIdObj = {};
        let defaultName;
        let managedCount = 0;
        users.forEach(userObj => {
            userIdObj[userObj.name] = userObj; // remapping users obj so keys could be names
            if (userObj.id === user.managerId) {
                defaultName = userObj.name
            }
            // if the user at hands id is equal to multiple manager ids then increment
            if (user.id === userObj.managerId) {
                managedCount++;
            }
        })
        return(
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">{user.name}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p>{`Manages ${managedCount} users`}</p>
                        <br />
                        <div className="control has-icons-left">
                            <div className="select">
                                <select form='selectManager' value={currentUser ? currentUser : defaultName} onChange={this.handleChange}>
                                    <option>None</option>
                                    {users.map(manager => {
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
                    <a className="card-footer-item" onClick={() => {
                        currentUser ? this.handleSave(userIdObj[currentUser], user)
                        : this.handleSave(currentUser, user)
                        }}>Save</a>
                    <a className="card-footer-item">Delete</a>
                </footer>
            </div>
        )
    }
}