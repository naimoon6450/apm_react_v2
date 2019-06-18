import React from 'react'

const Managers = (props) => {
    const { users } = props;
    // get all the manager Ids?
    const managerIds = []
    users.forEach(user => {
        user.managerId && managerIds.push(user.managerId);
    })
    return(
        users.map(user => {
            return managerIds.includes(user.id)
            ?   <div key={user.id} id="managers">
                    <div className="container">
                        <div className="notification">
                            {user.name}
                        </div>
                    </div>
                    <br />
                </div>
            : ''
        })
        
    )
}

export default Managers