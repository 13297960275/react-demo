import React from "react";
import { Row, Col } from "antd";
import Utils from "../../utils/util.js";
import axios from "../../axios/index.js";

import "./index.less";

export default class Header extends React.Component {
  state = {};

  componentWillMount() {
    this.setState({
      userName: "Lingesin"
    });
    setInterval(() => {
      let sysTime = Utils.formateDate(new Date().getTime(), true);
      this.setState({
        sysTime
      });
    }, 1000);
    this.getWeather();
  }

  getWeather() {
    let city = "武汉";
    axios
      .jsonp({
        url: "http://wthrcdn.etouch.cn/weather_mini?city=" + city
      })
      .then(res => {
        let nowWeather = res.data.forecast[0];
        let w =
          nowWeather.type +
          " " +
          nowWeather.low.replace(/[^0-9]/gi, "") +
          "-" +
          nowWeather.high.replace(/[^0-9]/gi, "") +
          "℃ " +
          nowWeather.fengxiang +
          " " +
          nowWeather.fengli.replace("<![CDATA[", "").replace("]]>", "");
        this.setState({
          weatherIntro: w
        });
      });
  }

  render() {
    const { menuName, menuType } = this.props;

    return (
      <div className="header">
        <Row className="header-top">
          {menuType ? (
            <Col span="6" className="logo">
              <img src="./assets/imgs/antd.svg" alt="" />
              <span>React Antd</span>
            </Col>
          ) : (
            ""
          )}
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        {menuType ? (
          ""
        ) : (
          <Row className="breadcrumb">
            <Col span="4" className="breadcrumb-title">
              {menuName || "首页"}
            </Col>
            <Col span="20" className="weather">
              <span className="date"> {this.state.sysTime} </span>
              <span className="weather-detail">
                {" "}
                {this.state.weatherIntro}{" "}
              </span>
            </Col>
          </Row>
        )}
      </div>
    );
    // return (
    //   <div className="header">
    //     <Row className="header-top">
    //       <Col span="24">
    //         <span>欢迎，{this.state.userName}</span>
    //         <a href="javascript:;"> 退出 </a>
    //       </Col>
    //     </Row>
    //     <Row className="breadcrumb">
    //       <Col span="4" className="breadcrumb-title">
    //         {" "}
    //         首页{" "}
    //       </Col>
    //       <Col span="20" className="weather">
    //         <span className="date"> {this.state.sysTime} </span>
    //         <span className="weather-detail"> {this.state.weatherIntro} </span>
    //       </Col>
    //     </Row>
    //   </div>
    // );
  }
}
