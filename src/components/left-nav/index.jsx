/**
 * 左侧导航栏组件
 */
import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link, withRouter } from "react-router-dom"

class LeftNav extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let pathname = this.props.history.location.pathname;
    if (pathname === '/') pathname = '/forward';

    return (
      <Menu
        style={{ width: 200, borderRight: 'none' }}
        defaultSelectedKeys={[pathname]}
        mode="inline"
      >
        <Menu.ItemGroup key="g1" title="测绘基础计算">
          <Menu.Item key="/forward"><Link to="/forward">前方交会</Link></Menu.Item>
          <Menu.Item key="/distance"><Link to="/distance">距离交会</Link></Menu.Item>
          <Menu.Item key="/coordinate"><Link to="/coordinate">坐标反算</Link></Menu.Item>
        </Menu.ItemGroup>

      </Menu>
    );
  }
}

export default withRouter(LeftNav)