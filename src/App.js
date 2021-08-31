import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Posts from './components/Post/Posts'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import ProtectedRoute from './ProtectedRoute'

import './App.css'

const App = () => {
  return (
    <Container maxWidth="md">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/posts" component={Posts} />
          </Switch>
        </Router>
      </div>
    </Container>
  )
}

export default App
