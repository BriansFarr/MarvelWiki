import React from 'react'
import Header from './Header'
import Nav from "./nav"
import Search from "./Search"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Comics from './Comics'
import About from './About'
import "./App.css"
import Footer from "./Footer"


function Home(props) {

 

    return (
      <>
        <Router>
          <div className="Home">
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/App" component={Search} />
              <Route path="/Comics" component={Comics} />
              <Route path="/About" component={About} />
            </Switch>
            
          </div>
        </Router>
        <h1>Welcome to Marvels Heroes and Villians Wiki</h1>
        <br>
        </br>
        <p>Check out the latest Marvel Comics on the Comics Page!</p>
        <br></br>
        <p>Search your favorite hero or villian on our search page.</p>
        <br>
        </br>
       <Footer />   
      </>
    )
  }

  export default Home