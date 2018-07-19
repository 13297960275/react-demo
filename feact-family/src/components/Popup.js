import React, { Component } from 'react'

class Popup extends Component{
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      content: ''
    }
  }
  render() {
    let self = this;
    return (
      <form className="popup" style={{display: 'block'}}>
        <div className="pbox">
          <span className="close">X</span>
          <div>
            <h4>计划标题</h4>
            <input value={this.state.title} placeholder="请输入计划标题"/>
          </div>
          <div>
            <h4>计划内容</h4>
            <textarea value={this.state.content} placeholder="请输入计划内容" rows="3"></textarea>
          </div>
          <div className="pBtn">
            <span>取消</span>
            <span>确认</span>
          </div>
        </div>
      </form>
    )
  }
}
export default Popup