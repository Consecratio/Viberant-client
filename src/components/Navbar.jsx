import { Link } from 'react-router-dom'
import UserImage from '../img/user.png'
import ViberantLogo from '../img/ViberantLogo.png'
import NavbarB from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = (props) => {
    // if the user is logged in
    const loggedIn = (
        <>
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
        </>
    )

    // if the user is logged out
    const loggedOut = (
        <>
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
        </>
    )

    return (
        // <NavbarB style={{backgroundColor: "#0FC3FC"}}>
        // <Container>
        //     <Nav className="me-auto">
        //         <NavbarB.Brand>               
        //             <Link to ="/"><img src ={ViberantLogo} alt="viberant logo" width={230} height={50}></img></Link>
        //         </NavbarB.Brand>
        //     </Nav>
        //     <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
        //     <NavbarB.Collapse id="responsive-navbar-nav" className="justify-content-end">
        //         <Nav>
        //             {props.currentUser ? loggedIn : loggedOut}
        //         </Nav>
        //     </NavbarB.Collapse>
        //     </Container>
        // </NavbarB>

        <NavbarB collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#0FC3FC"}}>
            <Container>
                <NavbarB.Brand><Link to ="/"><img src ={ViberantLogo} alt="viberant logo" width={230} height={50}></img></Link></NavbarB.Brand>
                <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarB.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link eventKey={2}>
                            {props.currentUser ? loggedIn : loggedOut}
                        </Nav.Link>
                    </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>


    )
}

export default Navbar