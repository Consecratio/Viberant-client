import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'

import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import Search from './components/Search'

function App() {
  // state holds user data if the user is logged in
  const [currentUser, setCurrentUser] = useState(null)

  // if user navigates away automatically log them in (if the jwt is valid)
  useEffect(() => {
    // get the token from local storage
    const token = localStorage.getItem('jwtToken')

    // if check for token
    if(token) {
      setCurrentUser(jwt.decode(token))
    } else {
      // else set user in state to be null
      setCurrentUser(null)
    }

  }, [])

  // function to log the user out
  const handleLogout = () => {
    // delete the jwt that's in local storage
    if(localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken')

      // set the user in state to be null
      setCurrentUser(null)

    }

  }

  return (
    <Router>

      <header>
        <Navbar
          currentUser={ currentUser }
          handleLogout={ handleLogout }
        />
      </header>

      <Search />

      <div className="App">
        <Switch>

          <Route
            exact path="/"
            component={ Welcome }
          />

          <Route
            path="/register"
            render={ props => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
          />

          <Route
            path="/login"
            render={ props => <Login {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
          />

          {/* conditionally render a redirect for auth locked routes */}
          <Route
            path="/profile"
            render={ props => currentUser ? <Profile {...props} currentUser={ currentUser } handleLogout={ handleLogout } /> : <Redirect to='/login' /> }
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
