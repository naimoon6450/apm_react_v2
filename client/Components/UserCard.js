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
    render() {
        const {user} = this.props;
        const {currentUser, users} = this.state;
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
                                <select value={currentUser} onChange={this.handleChange}>
                                    <option>None</option>
                                    {users.map(someUser => {
                                        return <option key={someUser.id} value={someUser.name}>{someUser.name}</option>
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
                    <a className="card-footer-item" onClick={() => console.log('clicked')}>Save</a>
                    <a className="card-footer-item">Delete</a>
                </footer>
            </div>
        )
    }
}