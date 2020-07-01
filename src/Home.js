import React from 'react'
import Header from './Header'
import Nav from "./nav"
import App from "./App"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Comics from './Comics'
import About from './About'
import "./App.css"
import Footer from "./Footer"

function Home() {
  return (
    <>
    <Router>
    <div className = "Home">
      <Header />
        <Nav />
        <Switch>
          <Route exact path="/App" component={App} />
          <Route path="/Comics" component={Comics} />
          <Route path="/About" component={About}/>
          </Switch>
          <Footer />
      </div>
      </Router>
    
    </>
  )
}

export default Home