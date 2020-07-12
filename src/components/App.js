import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

// App Components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Featured from './Featured';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={() => <About title="About" />} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:fname-:lname" component={Featured} />
          <Route path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
