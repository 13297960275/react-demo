import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import App from './App.js'
import Login from './pages/login'
import Buttons from './pages/ui/Buttons'
import Admin from './admin'
import NoMatch from './pages/noMatch'

export default class IRouter extends React.Component{
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/ui" render={() => 
              <Admin>
                <Switch>
                  <Route path="/ui/buttons" component={Buttons}/>
                  <Route component={NoMatch}/>
                </Switch>
              </Admin>
            }/>
            <Route path="/order/detail" component={Login}/>
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </App>
      </HashRouter>
    )
  }
}