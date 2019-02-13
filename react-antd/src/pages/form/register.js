import React from "react";
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  message,
  InputNumber,
  Tooltip,
  Row,
  Col,
  AutoComplete
} from "antd";
import moment from "moment";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
const AutoCompleteOption = AutoComplete.Option;
class FormRegister extends React.Component {
  state = {
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        message.success(
          `${userInfo.userName} 恭喜你，注册成功；当前密码为：${
            userInfo.userPwd
          }`
        );
      }
    });
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg: imageUrl,
          loading: false
        })
      );
    }
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("userPwd")) {
      callback("两次输入的密码不匹配");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confPwd"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    };
    const rowObject = {
      minRows: 4,
      maxRows: 6
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空"
                  }
                ]
              })(<Input placeholder="请输入用户名" />)}
            </FormItem>
            <Form.Item {...formItemLayout} label="密码">
              {getFieldDecorator("userPwd", {
                rules: [
                  {
                    required: true,
                    message: "请输入密码"
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input type="password" placeholder="请输入密码" />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="确认密码">
              {getFieldDecorator("confPwd", {
                rules: [
                  {
                    required: true,
                    message: "请输入确认密码"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(
                <Input
                  type="password"
                  placeholder="请确认密码"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label={
                <span>
                  昵称&nbsp;
                  <Tooltip title="系统中显示的别名">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator("nickname", {
                rules: [
                  {
                    required: true,
                    message: "请输入昵称",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="请输入昵称" />)}
            </Form.Item>

            <Form.Item {...formItemLayout} label="邮箱">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "请输入正确的邮箱格式"
                  },
                  {
                    required: true,
                    message: "请输入邮箱"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Please input your phone number!" }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Website">
              {getFieldDecorator("website", {
                rules: [{ required: true, message: "Please input website!" }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                  placeholder="website"
                >
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>

            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1"
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 18
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "2"
              })(
                <Select>
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">风华浪子</Option>
                  <Option value="3">北大才子</Option>
                  <Option value="4">百度FE</Option>
                  <Option value="5">创业者</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("interest", {
                initialValue: ["2", "5"]
              })(
                <Select mode="multiple">
                  <Option value="1">游泳</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">踢足球</Option>
                  <Option value="4">跑步</Option>
                  <Option value="5">爬山</Option>
                  <Option value="6">骑行</Option>
                  <Option value="7">桌球</Option>
                  <Option value="8">麦霸</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valuePropName: "checked",
                initialValue: true
              })(<Switch />)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment("2018-08-08")
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("address", {
                initialValue: "北京市海淀区奥林匹克公园"
              })(<TextArea autosize={rowObject} />)}
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator("time")(<TimePicker />)}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg")(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange}
                >
                  {this.state.userImg ? (
                    <img src={this.state.userImg} alt="" />
                  ) : (
                    <Icon type="plus" />
                  )}
                </Upload>
              )}
            </FormItem>
            <Form.Item
              {...formItemLayout}
              label="Captcha"
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator("captcha", {
                    rules: [
                      {
                        required: true,
                        message: "Please input the captcha you got!"
                      }
                    ]
                  })(<Input />)}
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>
            <FormItem {...offsetLayout}>
              {getFieldDecorator("userImg")(
                <Checkbox>
                  我已阅读过<a href="javascript:void(0)">安全协议</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormRegister);
