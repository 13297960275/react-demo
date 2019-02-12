import React, { Component } from 'react';
import { Card, Modal, Button } from 'antd'

export default class Modals extends Component {
  state = { 
    visible1: false,

    ModalText: 'Content of the modal',
    visible2: false,
    confirmLoading: false,

    
  }

  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  }

  handleOk1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

  render() {
    return (
      <div>
        <Card title="基础弹框">
          <Button type="primary" onClick={this.showModal1}>
            Open Modal
        </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible1}
            onOk={this.handleOk1}
            onCancel={this.handleCancel1}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Card>

        <Card title="block属性">
        </Card>

        <Card title="按钮组">
        </Card>

        <Card title="带图标的按钮">
        </Card>

        <Card title="Loading按钮">
        </Card>

        <Card title="Multiple按钮">
        </Card>

        <Card title="按钮尺寸">
        </Card>
      </div>
    );
  }
}
