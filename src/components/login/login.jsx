/**
 * 登录组件
 */
import React, { Component } from 'react'
import './login.less'
import { withRouter } from "react-router-dom"
import { message, Button } from 'antd'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true, // 右侧面板是登录还是注册，true则为登录
      name: '',
      password: '',
      repeat: '', // 重复密码
    };
    message.info('测试账号：admin  密码：123456');
  }

  /**
   * 点击登录按钮登录
   */
  handleLogin = () => {
    const { username, password } = this.state;
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('username', username);
      this.props.history.replace('/');
      message.success('登录成功！', 2);
    } else {
      message.error('用户名或密码错误！', 2);
      message.info('测试账号：admin  密码：123456');
    }
  }

  /**
   * 点击注册按钮
   */
  handleSignup = () => {
    message.info('功能开发中~', 2);
  }

  // 忘记密码
  forgetPwd = () => {
    message.info('测试账号：admin  密码：123456');
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  /**
   * 处理表单的回车事件
   */
  HandleonKeyDown = e => {
    if (e.key.toLowerCase() === 'enter') {
      this.handleLogin();
    }
  }

  componentDidMount() {
    /**
     * 看起来很奇怪，为什么要在React里面操作Dom，其实是因为这个动画如果用动态className
     * 来实现，会很复杂，通过Dom操作来实现反而没那么复杂
     * 此处的动画是表单的placeholder的缩小和放大效果
     */
    document.querySelectorAll('#login-container .input input').forEach(e => {
      e.addEventListener('focus', () => {
        e.parentElement.classList.add('focus');
      });
      e.addEventListener('blur', () => {
        if (e.value === '')
          e.parentElement.classList.remove('focus');
      });
    });
    // 现代浏览器会进行密码自动填充，异步检测有无被填充
    setTimeout(() => {
      document.querySelectorAll('#login-container .input input').forEach(e => {
        if (e.value !== '') e.parentElement.classList.add('focus');
      });
    }, 100);
  }

  render() {

    const { showLogin } = this.state;
    return (
      <div id="login-container">
        <div className="container">
          <img src="https://vincent-demo-1.oss-cn-chengdu.aliyuncs.com/vin_forum_img/%E5%A5%BD%E7%9C%8B%E7%9A%84%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E8%83%8C%E6%99%AF%E5%9B%BE.jpg" alt="" />
          <div className="panel">
            <div className={`content ${showLogin ? "login" : 'active'}`}>
              <div className="switch">
                <span
                  id='login'
                  className={[showLogin ? 'active' : null]}
                  onClick={() => this.setState({ showLogin: true })}
                >
                  Login
                </span>
                <span>/</span>
                <span
                  id='signup'
                  className={[showLogin ? null : 'active']}
                  onClick={() => this.setState({ showLogin: false })}
                >
                  Sign Up
                </span>
              </div>
              <form onKeyDown={this.HandleonKeyDown}>
                <div id='email' className="input" placeholder='Email'>
                  <input type="text" name='email' onChange={this.handleInputChange} />
                </div>
                <div className="input" placeholder='Username'>
                  <input type="text" id='username' name='username' onChange={this.handleInputChange} />
                </div>
                <div className="input" placeholder='Password'>
                  <input type="password" id='password' name='password' onChange={this.handleInputChange} />
                </div>
                <div id='repeat' className="input" placeholder='Repeat'>
                  <input type="text" name='repeat' onChange={this.handleInputChange} />
                </div>
                {/* <span className='forget-link'>Forget?</span> */}
                <Button type="link" className='forget-link' onClick={this.forgetPwd} ghost>Forget?</Button>
                {
                  showLogin ? <div id="login-btn" onClick={this.handleLogin}>LOG IN</div> :
                    <div id="login-btn" onClick={this.handleSignup}>SIGN UP</div>
                }

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)