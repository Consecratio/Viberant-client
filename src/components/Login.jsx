import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
import styled from 'styled-components'
import ViberantLogo from '../img/ViberantLogo.png'

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
    font-size:20px;
    
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

const LoginB = styled.input `
    height: 40px;
    width: 200px;
    background: #ff4ba6;
    color: #ffffff;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 900;
    border-radius: 5px;
    margin-bottom: 40px;
`

const ForgotP = styled.p `
    margin-right: 260px;
    padding: 10px;
    text-decoration: underline;
`

const Radio = styled.input `
    margin-right: 260px;
    margin-left: -265px;
`

const RememberMe = styled.label `
    margin-left: -250px;
`

const Login = (props) => {
    // state for the controlled form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for flash messages from the server
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('do axios call')
            // post to the backend with axios
            const requestBody = {
                email: email,
                password: password
            }

            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)
            
            console.log(response)
            // destrcuture the response
            const { token } = response.data
            
            // save the response to localstorage
            localStorage.setItem('jwtToken', token)

            // decode the jwt token before we put it in state
            const decoded = jwt.decode(token)

            // set the user in App.js' state
            props.setCurrentUser(decoded)

        } catch (error) {
            if(error.response.status === 400) {
                setMessage(error.response.data.msg)
            } else {
                console.log(error)
            }
        }
    }

    if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />

    return (
        <div>
            <Logo>
            <img src={ViberantLogo} alt='ViberantLogo' width={454} height={115}></img>
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
                <label htmlFor={'email-input'}></label>
                <Inputs
                    id='email-input'
                    type='email'
                    placeholder='user name or email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                
                <Inputs
                    id='password-input'
                    type='password'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <Radio
                type="checkbox" 
                id="html"  
                value="HTML"
                />
                <RememberMe htmlFor={'html'}>Remember me</RememberMe>
                <ForgotP>forgot password?</ForgotP>


                <LoginB
                    type='submit'
                    value='Login'
                />

                <p>Don't have an account? <strong> Sign up</strong></p>
            </form>

            
        </div>
    )
}

export default Login