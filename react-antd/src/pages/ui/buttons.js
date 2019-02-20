import React, { Component } from "react";
import { Card, Button, Icon, Dropdown, Menu, Radio } from "antd";
const ButtonGroup = Button.Group;

function handleMenuClick(e) {
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default class Buttons extends Component {
  state = {
    loading: false,
    iconLoading: false,
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const size = this.state.size;
    return (
      <div>
        <Card title="按钮类型">
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>
            Dashed(disabled)
          </Button>
          <div
            style={{
              background: "rgb(190, 200, 200)",
              display: "inline-block"
            }}
          >
            <Button ghost>Ghost</Button>
            <Button ghost disabled>
              Ghost(disabled)
            </Button>
          </div>
          <Button type="danger">Danger</Button>
          <Button type="danger" disabled>
            Danger(disabled)
          </Button>
        </Card>

        <Card title="block属性">
          <Button type="primary" block>
            Primary
          </Button>
          <Button block>Default</Button>
          <Button type="dashed" block>
            Dashed
          </Button>
          <Button type="danger" block>
            danger
          </Button>
        </Card>

        <Card title="按钮组">
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </Card>

        <Card title="带图标的按钮">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>

          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </Card>

        <Card title="Loading按钮">
          <span>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>

            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.enterLoading}
            >
              Click me!
            </Button>
            <Button
              type="primary"
              icon="poweroff"
              loading={this.state.iconLoading}
              onClick={this.enterIconLoading}
            >
              Click me!
            </Button>

            <Button shape="circle" loading />
            <Button type="primary" shape="circle" loading />
          </span>
        </Card>

        <Card title="Multiple按钮">
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
          <Dropdown overlay={menu}>
            <Button>
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
        </Card>

        <Card title="按钮尺寸">
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br />
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
          <Button type="danger" size={size}>
            Danger
          </Button>

          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" icon="download" size={size}>
            Download
          </Button>

          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="right" />
            </Button>
          </Button.Group>
        </Card>
      </div>
    );
  }
}
