import React from 'react'

const UserCard = (props) => {
    const { user, allUsers } = props
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
                            <select>
                                <option>None</option>
                                {allUsers.map(someUser => {
                                    return <option key={someUser.id}>{someUser.name}</option>
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
                <a href="#" className="card-footer-item">Save</a>
                <a href="#" className="card-footer-item">Delete</a>
            </footer>
        </div>
    )
}

export default UserCard;