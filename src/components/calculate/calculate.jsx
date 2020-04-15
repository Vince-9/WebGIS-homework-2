/**
 * 整个计算页面的组件
 */
import React, { Component } from 'react'
import { Layout } from 'antd'
import './calculate.less'
import LeftNav from '../../components/left-nav'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import ForwardInter from '../foward-inter/forward-inter'
import DistanceInter from '../distance-inter/distance-inter'
import Coordinate from '../coordinate/coordinate'

const { Header, Footer, Sider, Content } = Layout;

export default class Calculate extends Component {

  render() {
    // 验证是否已登录
    const username = localStorage.getItem('username');
    if (!username) {
      return <Redirect to='/login'></Redirect>
    }
    return (
      <Layout className='cal-layout'>
        <Header className='cal-header'>测绘计算工具</Header>
        <Layout className='mid-content'>
          <Sider className='left' width={200}>
            <LeftNav />
          </Sider>
          <Content className='right'>
            <Switch>
              <Route path='/forward'><ForwardInter /></Route>
              <Route path='/distance'><DistanceInter /></Route>
              <Route path='/coordinate'><Coordinate /></Route>
              <Route path='/'><ForwardInter /></Route>
            </Switch>
          </Content>
        </Layout>
        <Footer className='cal-footer'>西南交通大学 · 唐文城 · 2017114305 ©</Footer>
      </Layout>
    )
  }
}
