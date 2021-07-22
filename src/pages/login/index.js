import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import styles from './index.module.css'
import { actionCreators } from './store'

class Login extends Component {
    render() {
        if (this.props.login_status) {
            return <Redirect to="/" />
        } else {
            return (
                <div className={styles.sign}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="/api/images/login/logo.png" alt="Logo" />
                        </Link>
                    </div>

                    <div className={styles.sign_container}
                        style={{backgroundImage: 'url("/api/images/login/sign_container.png")'}}
                    >
                        <div className={styles.download_content}>
                            <a className={styles.download_btn} href="/">
                                下载简书APP
                            </a>
                            <div className={styles.download_qrcode}
                                style={{backgroundImage: 'url("/api/images/login/qrcode.png")'}}
                                onMouseEnter={this.props.handleMouseEnter}
                                onMouseLeave={this.props.handleMouseLeave}
                            >
                                {
                                    this.props.mouse_enter ? (
                                        <div className={styles.download_qrcode_big}
                                            style={{backgroundImage: 'url("/api/images/login/qrcode.png")'}}
                                        >
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>

                        <div className={styles.main}>
                            <h4 className={styles.title}>
                                <div className={styles.normal_title}>
                                    <a className={styles.active} href="/sign_in">登录</a>
                                    <b>·</b>
                                    <a id="js_sign_up_btn" href="/sign_up">注册</a>
                                </div>
                            </h4>

                            <div className={styles.js_sign_in_container}>
                                <form id="new_session" action="/sessions" acceptCharset="UTF-8" method="post">
                                    <div className={`${styles.input_prepend} ${styles.restyle}`}>
                                        <input name="session[email_or_mobile_number]" id="session_email_or_mobile_number"
                                            placeholder="手机号或邮箱" type="text"
                                            ref={(input) => {this.username = input}}
                                        />
                                        <i className="iconfont icon-seeuser"></i>
                                    </div>

                                    <div className={styles.input_prepend}>
                                        <input name="session[password]" id="session_password"
                                            placeholder="密码" type="password"
                                            ref={(input) => {this.password = input}}
                                        />
                                        <i className="iconfont icon-wodemima"></i>
                                    </div>

                                    <div className={styles.remember_btn}>
                                        <input type="checkbox" value="true" defaultChecked="checked" name="session[remember_me]" id="session_remember_me" />
                                        <span>记住我</span>
                                    </div>

                                    <div className={styles.forget_btn}>
                                        <a href="/">登录遇到问题?</a>
                                    </div>

                                    <button id="sign-in-form-submit-btn" type="button"
                                        className={styles.sign_in_button}
                                        onClick={() => {this.props.handleLogin(this.username, this.password)}}
                                    >
                                        <span id="sign-in-loading"></span>
                                        登录
                                    </button>
                                </form>

                                <div className={styles.more_sign}>
                                    <h6>社交帐号登录</h6>
                                    <ul>
                                        <li id="weibo-link-wrap">
                                            <a className={styles.weibo} id="weibo-link" href="/">
                                                <i className="iconfont icon-weibo"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a id="weixin" className={styles.wechat} target="_blank" href="/users/auth/wechat">
                                                <i className="iconfont icon-we-chat"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a id="qq" className={styles.qq} target="_blank" href="/users/auth/qq_connect">
                                                <i className="iconfont icon-qq"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="weibo-geetest-captcha"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        mouse_enter: state.get('login').get('mouse_enter'),
        login_status: state.get('login').get('login_status'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleLogin(username_element, password_element) {
            dispatch(actionCreators.login(username_element.value, password_element.value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)