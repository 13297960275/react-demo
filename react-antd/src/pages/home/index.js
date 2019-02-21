import React from "react";
import axios from "axios";
import "./../../mock";
import "./index.less";

export default class Home extends React.Component {
  componentDidMount() {
    axios
      .post("/data/index", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <div className="home-wrap">Hello World!</div>;
  }
}
