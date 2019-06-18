import React, { Component } from 'react'
import axios from 'axios';


export default class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            users: this.props.users
        }

        this.formChange = this.formChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    formSubmit() {
        const postData = {
            name: this.state.user,
        }
        axios.post('/api/users', postData)
        .then(resp => {
            this.setState({users: [...this.state.users, resp.data]})
            this.props.history.push('/')
            
            
        })
        .catch(e => console.error(e))
    }
    render() {
        return(
            <div id="newUserForm">
                <div className="field">
                    <label className="label">New User Name</label>
                    <div className="control">
                        <input name="user" className="input" type="text" placeholder="Raj Patel" onChange={this.formChange} />
                    </div>
                </div>
                <button onClick={this.formSubmit} className="button is-primary is-medium">Submit</button>
            </div>
        )
    }
}