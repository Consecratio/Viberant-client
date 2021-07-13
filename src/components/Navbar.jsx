import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserImage from '../img/user.png'
import ViberantLogo from '../img/ViberantLogo.png'


const Nav = styled.nav `
    padding: 25px;
    display: flex;
    align-items: center;
    background-color: #0FC3FC;
`
const Logo = styled.div `
    font-size: 2rem;
    margin-left: 100px;
`
const Actions = styled.div `
    padding-left: 60%;
`

const Navbar = (props) => {
    // if the user is logged in
    const loggedIn = (
        <Actions>
            {/* If the user is logged in */}
            <Link to="/profile" style={{
                textDecoration: "none",
                color: "black",
                padding: "0px 15px"
            }}>
                Profile
            </Link>

            <Link to="/" style={{
                textDecoration: "none",
                color: "black",
                padding: "0px 15px"
            }}>
                <span onClick={props.handleLogout}>Logout</span>
            </Link>
        </Actions>
    )

    // if the user is logged out
    const loggedOut = (
        <Actions>
            {/* If the user is logged out */}
            <img src={UserImage} alt="user" style={{height: "50px", width:"50px"}}/>
    
            <Link to="/login" style={{
                textDecoration: "none",
                color: "black",
                padding: "0px 15px"
            }}>
                Login
            </Link>

            <Link to="/register" style={{
                textDecoration: "none",
                color: "black",
                padding: "0px 15px"
            }}>
                Sign-up
            </Link>
        </Actions>
    )

    return (
        <Nav>
            <Logo>
                <Link to ="/"><img src ={ViberantLogo} alt="viberant logo" width={230} height={50}></img></Link>
            </Logo>

            {props.currentUser ? loggedIn : loggedOut}
        </Nav>
    )
}

export default Navbar