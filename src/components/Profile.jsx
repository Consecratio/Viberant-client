import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
import NewPost from './NewPost'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePosts from "./ProfilePosts"

const Profile = (props) => {
    // state is information from the server
    const [message, setMessage] = useState('')

    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                // get the jwt from local storage
                const token = localStorage.getItem('jwtToken')

                // make up the auth headers
                const authHeaders = {
                    Authorization: token
                }

                // hit the auth locked endpoint
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, { headers: authHeaders })

                // set state with the data from the server
                setMessage(response.data.about)

            } catch (error) {
                console.log(error)
                // log the user out if an error occurs
                props.handleLogout()
            }
        }

        getPrivateMessage()
    }, [props])

    // redirect if there is no user in state
    if(!props.currentUser) return <Redirect to='/login' component={ Login } currentUser={ props.currentUser } />
    
    console.log(props.currentUser)

    return (
        <div style={{marginLeft: "100px"}} >
            <h1 style={{textAlign: "left", margin: "50px 0px 100px"}}><strong>{props.currentUser.name}</strong></h1>
            <div style={{padding:"5px 40px", marginRight: "15px"}}>
                <p>{message}</p>
            </div>
            <div>
                <h1 style={{textAlign: "left", margin: "50px 0px 100px", }}><strong>Your Events</strong></h1>
                <NewPost {...props}/>
            </div>
            <div className="mt-5">
                <ProfilePosts userId={props.currentUser.id} />
            </div>
        </div>
    )
}

export default Profile