import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectReview from "./Pages/ProjectReview";
import Sorry from "./Pages/Sorry";
import ScrollToTop from "./Components/ScrollToTop";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
           
            <Route path="/blog/:id">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
