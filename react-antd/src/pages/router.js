import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './App.js'
import Login from './pages/login'
import Buttons from './pages/ui/buttons.1'
import Modals from './pages/ui/modals.1'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import Admin from './admin'
import NoMatch from './pages/noMatch'

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/ui" render={() =>
              <Admin>
                <Switch>
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/ui/buttons" component={Buttons} />
                  {/* <Route path="/ui/modals" component={Modals} /> */}
                  {/* <Route path="/ui/modals1" component={Modals} /> */}
                  <Route path="/ui/loadings" component={Loadings} />
                  <Route path="/ui/notification" component={Notice} />
                  <Route path="/ui/messages" component={Messages} />
                  <Route path="/ui/tabs" component={Tabs} />
                  <Route path="/ui/gallery" component={Gallery} />
                  <Route path="/ui/carousel" component={Carousel} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            } />
            <Route path="/order/detail" component={Login} />
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </App>
      </HashRouter>
    )
  }
}