import React, { Component } from 'react'

import styles from './style.module.css'
import logoImg from '../../statics/logo.png';

class Header extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
          <div className={styles.width_limit}>
            <a className={styles.logo} href="/">
              <img className={styles.logo_img} src={logoImg} alt="Nav logo" />
            </a>
            <a className={`${styles.btn} ${styles.write_btn}`} target="_blank" href="/">
              <i className={`iconfont icon-line-quillpenyumaobi`}></i>
              写文章
            </a>
            <a className={`${styles.btn} ${styles.sign_up}`} href="/">
              注册
            </a>
            <a className={`${styles.btn} ${styles.login_in}`} href="/">
              登录
            </a>
            <div className={styles.style_mode}>
              <a className={styles.style_mode_btn} href="/">
                <i className={`iconfont icon-Aa`}></i>
              </a>
            </div>
            <div className={styles.container}>
              <div className={`${styles.collapse} ${styles.navbar_collapse}`}>
                <ul className={`${styles.nav} ${styles.navbar_nav}`}>
                  <li className={`${styles.tab} ${styles.active}`}>
                    <a href="/">
                      <span className="menu-text">首页</span>
                      <i className={`iconfont icon-daohang ${styles.menu_icon}`}></i>
                    </a>
                  </li>
                  <li className={`${styles.tab}`}>
                    <a href="/">
                      <span className="menu-text">下载App</span>
                      <i className={`iconfont icon-xiazai ${styles.menu_icon}`}></i>
                    </a>
                  </li>
                  <li className={`${styles.tab}`}>
                    <a href="/">
                      <span className="menu-text">IT技术</span>
                      <i className={`iconfont icon-yonghu ${styles.menu_icon}`}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
    )
  }
}

export default Header;
