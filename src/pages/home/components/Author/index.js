import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './index.module.css'
import { actionCreators } from '../../store'

class Writer extends Component {
    render() {
        let { page, perpage, authors_list } = this.props;
        let list = authors_list.toJS()
        let list_len = list.length
        let totalpage = Math.ceil(list_len / perpage)
        let page_list = []

        for(let i = page * perpage; i < list_len && i < perpage + page * perpage; i++) {
            page_list.push(list[i])
        }

        return (
            <div className={styles.author_warp}>
                <div className={styles.authors}>
                    <div className={styles.title}>
                        <span>推荐作者</span>
                        <a className={styles.page_change} href="/" onClick={(e) => {e.preventDefault();this.props.handleAuthorPageChange(page, totalpage, this.author_spin_icon)}}>
                            <i ref={(icon) => {this.author_spin_icon = icon}} className={`iconfont icon-spin`}></i>
                            换一批
                        </a>
                    </div>

                    <ul className={styles.list}>
                        {
                            page_list.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href="/" target="_blank" className={styles.avatar}>
                                            <img src={item.avatarUrl} alt="avatar" />
                                        </a>
                                        <a className={styles.follow} state="0" href="/">
                                            <i className="iconfont icon-follow"></i>
                                            关注
                                        </a>
                                        <a href="/u/ef4f2422125f?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className={styles.name}>
                                            {item.author}
                                        </a>
                                        <p>
                                            写了{item.words}字 · {item.like}喜欢
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <a href="/" target="_blank" className={styles.find_more}>
                        查看全部
                        <i className="iconfont icon-dayuhao1"></i>
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authors_list: state.get('home').get('recommend_authors_list'),
        page: state.get('home').get('authors_page'),
        perpage: state.get('home').get('authors_perpage'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAuthorPageChange(page, totalpage, author_spin_icon) {
            // 换一换的旋转过渡动画效果
            let origin_angle = author_spin_icon.style.transform.replace(/[^0-9]/ig, '')
            if (origin_angle === '') {
                origin_angle = 0
            } else {
                origin_angle = parseInt(origin_angle, 10)
            }
            author_spin_icon.style.transform = `rotate(${origin_angle + 360}deg)`

            // 翻到下一页
            let new_page = (page + 1) % totalpage
            dispatch(actionCreators.recommendAuthorsChange(new_page))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)