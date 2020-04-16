/**
 * 整个计算页面的组件
 */
import React, { Component } from 'react'
import { Layout, Button } from 'antd'
import './calculate.less'
import LeftNav from '../../components/left-nav'
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom"
import ForwardInter from '../foward-inter/forward-inter'
import DistanceInter from '../distance-inter/distance-inter'
import Coordinate from '../coordinate/coordinate'

const { Header, Footer, Sider, Content } = Layout;

class Calculate extends Component {
  // 退出登录
  logout = () => {
    localStorage.removeItem('username');
    this.props.history.replace('/login');
  }

  render() {
    // 验证是否已登录
    const username = localStorage.getItem('username');
    if (!username) {
      return <Redirect to='/login'></Redirect>
    }
    return (
      <Layout className='cal-layout'>
        <Header className='cal-header'>
          <h1 className='title'>测绘计算工具</h1>
          <div className='welcome-box'>
            <span className="welcome">欢迎，{username}！</span>
            <Button ghost onClick={this.logout}>退出登录</Button>
          </div>
        </Header>
        <Layout className='mid-content'>
          <Sider className='left' width={200}>
            <LeftNav />
          </Sider>
          <Content className='right'>
            <div className="container">
              <Switch>
                <Route path='/forward'><ForwardInter /></Route>
                <Route path='/distance'><DistanceInter /></Route>
                <Route path='/coordinate'><Coordinate /></Route>
                <Route path='/'><ForwardInter /></Route>
              </Switch>
            </div>
          </Content>
        </Layout>
        <Footer className='cal-footer'>西南交通大学 · 唐文城 · 2017114305 ©</Footer>
      </Layout>
    )
  }
}

export default withRouter(Calculate)