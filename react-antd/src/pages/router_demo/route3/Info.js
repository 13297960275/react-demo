import React from "react";

export default class Info extends React.Component {
  render() {
    return (
      <div>Info page 3 动态路由参数：{this.props.match.params.mainId}</div>
    );
  }
}
