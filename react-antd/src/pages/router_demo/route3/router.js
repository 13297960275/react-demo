import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main.js'
import About from './About.js'
import Info from './Info.js'
import Topics from './Topics.js'
import Home from './Home.js'
import NoMatch from './NoMatch.js'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            {/*<Route exact path="/" component={Main}/>*/}
            <Route path="/main" render={() =>
              <Main>
                <Route path="/main/:mainId" component={Info}></Route>
              </Main>
            }></Route>
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route component={NoMatch} />
          </Switch>
        </Home>
      </Router>
    )
  }
}