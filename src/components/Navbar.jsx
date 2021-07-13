import { Link } from 'react-router-dom'
import styled from 'styled-components'
import userImage from '../img/user.png'
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
    padding-left: 50%;
`

const ListElem = styled.a `
    text-decoration: none;
    color: black;
    padding: 0px 15px;
`

// const UserIcon = styled.div `
//     display: inline;
//     width: 10;
//     height: 25px;
// `

const Navbar = (props) => {
    // if the user is logged in
    const loggedIn = (
        <Actions>
            {/* If the user is logged in */}
            <Link to="/profile">
                <ListElem>Profile</ListElem>
            </Link>

            <Link to="/">
                <ListElem><span onClick={props.handleLogout}>Logout</span></ListElem>
            </Link>
        </Actions>
    )

    // if the user is logged out
    const loggedOut = (
        <Actions>
            {/* If the user is logged out */}
            {/* <UserIcon>
                <img src={userImage} alt="user"/>
            </UserIcon> */}
            <Link to="/login">
                <ListElem>Login</ListElem>
            </Link>

            <Link to="/register">
                <ListElem>Sign-up</ListElem>
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