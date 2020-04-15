/**
 * 距离交会组件
 */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Row, Col } from 'antd'
import './distance-inter.less'
import { EnvironmentOutlined, ColumnWidthOutlined } from '@ant-design/icons'
import Cal from '../../utils/cal'
import str2num from '../../utils/str2num'

const Item = Form.Item;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

export default class DistanceInter extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  // 点击计算按钮
  onFinish = values => {
    // 将参数转为number类型
    const { x1, y1, A, x2, y2, B } = str2num(values);
    const { x, y } = Cal.distanceInter(x1, y1, x2, y2, A, B);
    this.formRef.current.setFieldsValue({ x, y });
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
        <h1>距离交会</h1>
        <Form
          {...layout}
          ref={this.formRef}
          name="basic"
          initialValues={{}}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="distance-form"
        >
          <Row >
            <Col span={12}>
              <div className="group">
                <h2>已知点A</h2>
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
                <Item
                  label="边长a"
                  name="A"
                  rules={[{ required: true, message: '请输入！' }]}
                >
                  <Input prefix={<ColumnWidthOutlined />} addonAfter="米" />
                </Item>
              </div>
            </Col>
            <Col span={12}>
              <img src={require('./img/distance.jpg')} height="220px" alt="" />
            </Col>
          </Row>
          <Row >
            <Col span={12}>
              <div className="group">
                <h2>已知点B</h2>
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

                <Item
                  label="边长b"
                  name="B"
                  rules={[{ required: true, message: '请输入！' }]}
                >
                  <Input prefix={<ColumnWidthOutlined />} addonAfter="米" />
                </Item>
              </div>
            </Col>
            <Col span={12}>
              <div className="group">
                <h2>计算结果</h2>
                <Item
                  label="X"
                  name="x"
                >
                  <Input prefix={<EnvironmentOutlined />} />
                </Item>
                <Item
                  label="Y"
                  name="y"
                >
                  <Input prefix={<EnvironmentOutlined />} />
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
