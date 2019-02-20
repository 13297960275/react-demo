import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Main from "./Main.js";
import About from "./About.js";
import Topics from "./Topics.js";
import Home from "./Home.js";

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          {/*<Route exact path="/" component={Main}/>*/}
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route path="/main/a" component={About} />
              </Main>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Home>
      </Router>
    );
  }
}
