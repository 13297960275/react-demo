import React from 'react'
import {Menu, Icon} from 'antd'
import menuList from './../../configs/menu-config.js'

import './index.less'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class NavLeft extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
      const menuTreeNode = this.renderMenu(menuList)

      this.setState({menuTreeNode})
    }

    // 菜单渲染
    renderMenu = (data) => {
      return data.map((elem, index) => {
        console.log(index, elem)
        if (elem.children) {
          return (
            <SubMenu title={elem.title} key={elem.path}>
              {this.renderMenu(elem.children)}
            </SubMenu>
          )
        }
        return <Menu.Item title={elem.title} key={elem.path}> {elem.title} </Menu.Item>
      })
    }
    
    render() {
        return (
            <div>
            	<div className="logo">
                    <img src="/assets/antd.svg" alt="" />
                    <h1> React Antd </h1>
                </div>

                <Menu theme="dark" mode="vertical">
                  {this.state.menuTreeNode}
                    {/*<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                      <MenuItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                      </MenuItemGroup>
                      <MenuItemGroup title="Iteom 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                      </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 6</Menu.Item>
                      <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <Menu.Item key="11">Option 11</Menu.Item>
                      <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>*/}
                </Menu>
            </div>
        )
    }
}