import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import Main from './Main.js'
import About from './About.js'
import Topics from './Topics.js'

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
				<div>
					<ul>
		        <li><Link to="/"> 首页 </Link></li>
		        <li><Link to="/about"> 关于 </Link></li>
		        <li><Link to="/topics"> 主题列表 </Link></li>
		      </ul>
		      <hr/>
		      <Route exact path="/" component={Main}/>
		      <Route path="/about" component={About}/>
		      <Route path="/topics" component={Topics}/>
				</div>
			</HashRouter>
    )
  }
}