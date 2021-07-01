import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './style.module.css'
import logoImg from '../../statics/logo.png';
import { actionCreators } from './store'

class Header extends Component {
  getSearchInfo() {
    if (this.props.focused) {
      return (
        <div className={styles.search_info}>
          <div className={styles.search_info_title}>
            热门搜索
            <span className={styles.search_info_change}>
              换一批
            </span>
          </div>
          <div className={styles.search_info_list}>
            {
              this.props.search_info_list.map((item, index) => {
                return (
                  <a className={styles.search_info_item} href="/" key={index}>{item}</a>
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return null
    }
  }

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

                  <li className={`${styles.tab} ${styles.search_wrapper}`}>
                    <input className={`${styles.search} ${this.props.focused ? styles.focused : ''}`} placeholder="搜索" 
                      onFocus={this.props.handleSearchFocus} onBlur={this.props.handleSearchBlur} 
                    />
                    <i className={`iconfont icon-fangdajing ${styles.search_icon} ${this.props.focused ? styles.icon_focused : ''}`}></i>
                    
                    { this.getSearchInfo() }
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    search_info_list: state.get('header').get('search_info_list'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus() {
      // 向后端发送请求获取热门搜索信息
      dispatch(actionCreators.getSearchInfoList())
      // 搜索框聚焦，显示热门搜索信息框
      dispatch(actionCreators.searchFocus())
    },
  
    handleSearchBlur() {
      dispatch(actionCreators.searchBlur())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
