import React from "react";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        Main page 2<Link to="/main/a"> 关于2 </Link>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
