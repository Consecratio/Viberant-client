import { useState } from "react"
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
import styled from 'styled-components'
import ViberantLogo from '../img/ViberantLogo.png'
import { Link } from 'react-router-dom'

const Logo = styled.div `
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    diplay: center;
    width: 450px;
    text: center;
    `
const Links = styled.li `
    display: inline;
    margin: 0 auto;
    margin-right: 10px;
    font-size: 20px;
    
`

const Inputs = styled.input `
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 450px;
    height: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
`

const Passwords = styled.input `
    margin: 0 auto;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 40px;
    width: 220px;
    border-radius: 5px;
`
const SignupB = styled.input `
    margin-top: 10px;
    width: 150px;
    height: 38px;
    background: #ff4ba6;
    margin-bottom: 40px;
    color: #ffffff;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 900;
    border-radius: 5px;
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
               <img src={ViberantLogo} alt='ViberantLogo' width={454} height={115}></img>
           </Logo>
            
            <ul>
                <Links>
                    <Link to="/login" style={{textDecortion:"none", color: "black"}}>I have an account</Link>
                </Links>

                <Links>
                    |
                </Links>

                <Links>
                    <Link to="/login" style={{textDecortion:"none", color: "black"}}>I'm a new member</Link>
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