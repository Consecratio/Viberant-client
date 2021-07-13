import { useState } from "react"
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
import styled from 'styled-components'

const Logo = styled.div `
    font-size: 2rem;
    margin-left: 33%;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px;
    padding-left: 75px;
    padding-right: 50px;
    background-color: lightgrey;
    diplay: center;
    width: 450px;
    text: center;
    `
    const Links = styled.li `
    display: inline;
    margin-left: 40px;
    margin-right: 50px;
    font-size: 20px;
    
`

const Inputs = styled.input `
    display: flex;
    flex-direction: row;
    margin-left: 33%;
    width: 450px;
    height: 25px;
    margin-top: 30px;
    margin-bottom: 20px;
`

const Passwords = styled.input `
    margin-right: -9px;
    margin-left: 20px;
    margin-bottom: 40px;
    width: 220px;
    
`
const SignupB = styled.input `
    margin-top: 10px;
    padding: 5px;
    width: 200px;
    background: white;
    margin-bottom: 40px;
`

const Register = (props) => {
    // state for the controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for the flash message from the server
    const [message, setMessage] = useState('')

    // function to handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('submit the form!')
            // make a request body
            const requestBody = {
                name: name,
                email: email,
                password: password
            }

            // post registration data to the server
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)

            // take the token out of the response
            const { token } = response.data

            // set token in local storage
            localStorage.setItem('jwtToken', token)

            // decode the token
            const decoded = jwt.decode(token)

            // set the user in the App.js state
            props.setCurrentUser(decoded)
            
        } catch (error) {
            // set message if the error is a 400
            if(error.response.status === 400) {
                setMessage(error.response.data.msg)
            } else {
                console.log(error)
            }
        }
    }

    // redirect if the user is logged in
    if(props.currentUser) return <Redirect to="/profile" component={Profile} currentUser={props.currentUser} />

    return (
        <div>
           <Logo>
               Logo
           </Logo>
            
            <ul>
                <Links>
                    I have an account
                </Links>

                <Links>
                    |
                </Links>

                <Links>
                    I'm a new member
                </Links>
            </ul>

            <p>{message}</p>

            <form onSubmit={handleSubmit}>
                <Inputs
                    id='name-input'
                    type='text'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <Inputs
                    id='email-input'
                    type='email'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <Inputs
                    id='name-input'
                    type='number'
                    placeholder='Phone Number'
                />

                <Passwords
                    id='password-input'
                    type='password'
                    placeholder='Desired Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                
                <Passwords
                    id='password-input'
                    type='password'
                    placeholder='Password Confirm'
                />
                <br />

                <SignupB type='submit' value='Sign up' />

                <p>Already have an account? <strong>Log in</strong></p>
            </form>
        </div>
    )
}

export default Register