import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import menuList from "./../../configs/menu-config.js";

import "./index.less";

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);

    this.setState({
      menuTreeNode
    });
  }

  // 菜单渲染
  renderMenu = data => {
    return data.map((elem, index) => {
      if (elem.children) {
        return (
          <SubMenu title={elem.title} key={elem.path}>
            {this.renderMenu(elem.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={elem.title} key={elem.path}>
          <NavLink to={elem.path}> {elem.title} </NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="./assets/imgs/antd.svg" alt="" />
          <h1> React Antd </h1>
        </div>

        <Menu theme="dark" mode="vertical">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
