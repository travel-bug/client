import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import See from "./pages/see";
import Do from "./pages/do";
import Eat from "./pages/eat";
import Profile from "./pages/profile";
import About from "./pages/about";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import Navbar2 from './components/Navbar2/navbar2';
class App extends Component {
  
  render() {

    return (
      
      <Router>
      <Navbar2 />
        <div className="app-content-container">
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/see" component={See} />
            <Route exact path="/do" component={Do} />
            <Route exact path="/eat" component={Eat} />
			      <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  }
}
export default App;
