import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import See from "./pages/see";
import Do from "./pages/do";
import Eat from "./pages/eat";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import Navbar2 from './components/Navbar2/navbar2';
// import Navbar from './components/Navbar/navbar';
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
            <Footer />
          </Wrapper>
        </div>
      </Router>
    );
  }
}
export default App;
