/**
 * 登录组件
 */
import React, { Component } from 'react'
import './login.less'
import { withRouter } from "react-router-dom"
import { message } from 'antd'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true, // 右侧面板是登录还是注册，true则为登录
      name: 'admin',
      password: '123456',
      repeat: '', // 重复密码
    }
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
    }
  }

  /**
   * 点击注册按钮
   */
  handleSignup = () => {
    message.info('功能开发中~', 2);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
          <img src={require('../../assets/img/login-bg.jpg')} alt="" />
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
              <form>
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
                <span>Forget?</span>
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