/**
 * 坐标反算距离、方位角 组件
 */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Row, Col } from 'antd'
import './coordinate.less'
import { EnvironmentOutlined, ColumnWidthOutlined } from '@ant-design/icons'
import Cal from '../../utils/cal'
import str2num from '../../utils/str2num'

const Item = Form.Item;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

export default class ForwardInter extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  // 点击计算按钮
  onFinish = values => {
    // 将参数转为number类型
    const { x1, y1, x2, y2 } = str2num(values);
    const a = Cal.cor2ang(x1, y1, x2, y2); // 计算方位角
    const d = Cal.distance(x1, y1, x2, y2); // 计算两点距离
    this.formRef.current.setFieldsValue({ a, d });
  }

  /**
   * 清空表单
   */
  clearForm = () => {
    this.formRef.current.resetFields();
  }

  render() {
    return (
      <div>
        <h1>前方交会</h1>
        <Form
          {...layout}
          ref={this.formRef}
          initialValues={{}}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="coordinate-form"
        >
          <Row >
            <Col span={12}>
              <div className="group">
                <h2>起点</h2>
                <Item
                  label="X"
                  name="x1"
                  rules={[{ required: true, message: '请输入！' }]}
                >
                  <Input prefix={<EnvironmentOutlined />} />
                </Item>
                <Item
                  label="Y"
                  name="y1"
                  rules={[{ required: true, message: '请输入！' }]}
                >
                  <Input prefix={<EnvironmentOutlined />} />
                </Item>
              </div>
            </Col>
            <Col span={12}>
              <img src="https://vincent-demo-1.oss-cn-chengdu.aliyuncs.com/vin_forum_img/coordinate.jpg" height="220px" alt="" />
            </Col>
          </Row>
          <Row >
            <Col span={12}>
              <div className="group">
                <h2>终点</h2>
                <Item
                  label="X"
                  name="x2"
                  rules={[{ required: true, message: '请输入！' }]}
                >
                  <Input prefix={<EnvironmentOutlined />} />
                </Item>
                <Item
                  label="Y"
                  name="y2"
                  rules={[{ required: true, message: '请输入！' }]}
                >
                  <Input prefix={<EnvironmentOutlined />} />
                </Item>
              </div>
            </Col>
            <Col span={12}>
              <div className="group">
                <h2 className="result-h2">计算结果</h2>
                <Item
                  label="方位角"
                  name="a"
                >
                  <Input prefix={<EnvironmentOutlined />} addonAfter="度" />
                </Item>
                <Item
                  label="距离"
                  name="d"
                >
                  <Input prefix={<ColumnWidthOutlined />} />
                </Item>

                <Button className="cal-btn" type="primary" htmlType="submit">
                  计算
                </Button>
                <Button className="cal-btn" danger onClick={this.clearForm}>
                  清空
                </Button>

              </div>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

