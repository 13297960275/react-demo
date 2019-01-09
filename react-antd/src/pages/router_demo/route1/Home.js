import React from 'react'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

import Main from './Main.js'
import About from './About.js'
import Topics from './Topics.js'

export default class Home extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<ul>
						<li><Link to="/"> 首页1 </Link></li>
						<li><Link to="/about"> 关于1 </Link></li>
						<li><Link to="/topics"> 主题列表1 </Link></li>
					</ul>
					<hr />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/about" component={About} />
						<Route path="/topics" component={Topics} />
					</Switch>
				</div>
			</HashRouter>
		)
	}
}