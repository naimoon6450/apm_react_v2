import React, {Component} from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import Managers from './Managers'
import axios from 'axios'

class Main extends Component {
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
            <HashRouter>
                <div id='main'>
                    <section className="hero is-primary">
                        <div className="hero-body">
                            <div className="container">
                            <h1 className="title">
                                ACME Management
                            </h1>
                            </div>
                        </div>
                    </section>
                    <Navbar users={this.state.users} />
                    <Route exact path="/" render={() => <Users users={this.state.users} />} />
                    <Route path="/managers" render={() => <Managers users={this.state.users} />} />

                </div>
            </HashRouter>
        )
    }
}

export default Main;