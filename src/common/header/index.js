import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './index.module.css'
import logoImg from '../../statics/logo.png';
import { actionCreators } from './store'

class Header extends Component {
  getSearchInfo() {
    let { page, perpage, search_info_list } = this.props;
    let list = search_info_list.toJS()
    let list_len = list.length
    let totalpage = Math.ceil(list_len / perpage)
    let page_list = []

    for(let i = page * 10; i < list_len && i < perpage + page * 10; i++) {
      page_list.push(list[i])
    }

    if (this.props.focused || this.props.mouse_enter) {
      return (
        <div className={styles.search_info}
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <div className={styles.search_info_title}>
            热门搜索
            <span className={styles.search_info_change}
              onClick={() => this.props.handleSearchInfoChange(page, totalpage, this.spin_icon)}
            >
              <i ref={(icon) => {this.spin_icon = icon}} className={`iconfont icon-spin`}></i>
              换一批
            </span>
          </div>
          <div className={styles.search_info_list}>
            {
              page_list.map((item, index) => {
                return (
                  <Link className={styles.search_info_item} to="/" key={index}>{item}</Link>
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
            <Link className={styles.logo} to="/">
              <img className={styles.logo_img} src={logoImg} alt="Nav logo" />
            </Link>

            <Link className={`${styles.btn} ${styles.write_btn}`} to="/">
              <i className={`iconfont icon-line-quillpenyumaobi`}></i>
              写文章
            </Link>

            <Link className={`${styles.btn} ${styles.sign_up}`} to="/">
              注册
            </Link>

            <Link className={`${styles.btn} ${styles.login_in}`} to="/">
              登录
            </Link>

            <div className={styles.style_mode}>
              <Link className={styles.style_mode_btn} to="/">
                <i className={`iconfont icon-Aa`}></i>
              </Link>
            </div>

            <div className={styles.container}>
              <div className={`${styles.collapse} ${styles.navbar_collapse}`}>
                <ul className={`${styles.nav} ${styles.navbar_nav}`}>
                  <li className={`${styles.tab} ${styles.active}`}>
                    <Link to="/">
                      <span className="menu-text">首页</span>
                      <i className={`iconfont icon-daohang ${styles.menu_icon}`}></i>
                    </Link>
                  </li>

                  <li className={`${styles.tab}`}>
                    <Link to="/">
                      <span className="menu-text">下载App</span>
                      <i className={`iconfont icon-xiazai ${styles.menu_icon}`}></i>
                    </Link>
                  </li>

                  <li className={`${styles.tab}`}>
                    <Link to="/">
                      <span className="menu-text">IT技术</span>
                      <i className={`iconfont icon-yonghu ${styles.menu_icon}`}></i>
                    </Link>
                  </li>

                  <li className={`${styles.tab} ${styles.search_wrapper}`}>
                    <input className={`${styles.search} ${this.props.focused ? styles.focused : ''}`} placeholder="搜索"
                      onFocus={() => this.props.handleSearchFocus(this.props.search_info_list)}
                      onBlur={this.props.handleSearchBlur}
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
    mouse_enter: state.get('header').get('mouse_enter'),
    page: state.get('header').get('page'),
    perpage: state.get('header').get('perpage'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus(search_info_list) {
      if (search_info_list.size === 0) {
        // 向后端发送请求获取热门搜索信息
        dispatch(actionCreators.getSearchInfoList())
      }

      // 搜索框聚焦，显示热门搜索信息框
      dispatch(actionCreators.searchFocus())
    },

    handleSearchBlur() {
      dispatch(actionCreators.searchBlur())
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleSearchInfoChange(page, totalpage, spin_icon) {
      // 换一换的旋转过渡动画效果
      let origin_angle = spin_icon.style.transform.replace(/[^0-9]/ig, '')
      if (origin_angle === '') {
        origin_angle = 0
      } else {
        origin_angle = parseInt(origin_angle, 10)
      }
      spin_icon.style.transform = `rotate(${origin_angle + 360}deg)`

      // 翻到下一页
      let new_page = (page + 1) % totalpage
      dispatch(actionCreators.searchInfoChange(new_page))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
