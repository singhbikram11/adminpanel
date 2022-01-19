import React from 'react'
import "./homepage.css"

const homepage = ({setLoginUser, user}) => {
    return (
        <div className="homepage">
            {
                user.role === "admin"
                ?
                <h1>Hello Admin</h1>
                :
                ""
            }
            {
                user.role === "receptionist"
                ?
                <h1>Hello Receptionist</h1>
                :
                ""
            }
             {
                user.role === "telecaller"
                ?
                <h1>Hello telecaller</h1>
                :
                ""
            }

            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}
export default homepage;
