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
              <i className={`${styles.iconfont} ${styles.ic_write}`}></i>
              写文章
            </a>
            <a className={`${styles.btn} ${styles.sign_up}`} href="/">
              注册
            </a>
            <a className={`${styles.btn} ${styles.login_in}`} href="/">
              登录
            </a>
            <div className={styles.style_mode}>
              <a className={styles.style_mode_btn}>
                Aa
              </a>
            </div>
            <div className={styles.container}>
              <div className={`${styles.collapse} ${styles.navbar_collapse}`}>
                <ul className={`${styles.nav} ${styles.navbar_nav}`}>
                  <li className={`${styles.tab} ${styles.active}`}>
                    <a href="/">
                      <span class="menu-text">首页</span>
                    </a>
                  </li>
                  <li className={`${styles.tab}`}>
                    <a href="/">
                      <span class="menu-text">下载App</span>
                    </a>
                  </li>
                  <li className={`${styles.tab}`}>
                    <a href="/">
                      <span class="menu-text">IT技术</span>
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
