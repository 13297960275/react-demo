import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
  render() {
    return (
    <div>
        <ul>
        <li><Link to="/main"> 首页1 </Link></li>
        <li><Link to="/about"> 关于1 </Link></li>
        <li><Link to="/topics"> 主题列表1 </Link></li>
        </ul>
        <hr/>
        {this.props.children}
    </div>
    )
  }
}