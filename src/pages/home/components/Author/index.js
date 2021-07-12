import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './index.module.css'

class Writer extends Component {
    render() {
        let { authors_page, authors_perpage, recommend_authors_list } = this.props;
        let list = recommend_authors_list.toJS()
        let list_len = list.length
        let totalpage = Math.ceil(list_len / authors_perpage)
        let page_list = []

        for(let i = authors_page * authors_perpage; i < list_len && i < authors_perpage + authors_page * authors_perpage; i++) {
            page_list.push(list[i])
        }

        return (
            <div className={styles.author_warp}>
                <div className={styles.authors}>
                    <div className={styles.title}>
                        <span>推荐作者</span>
                        <a className={styles.page_change} href="/" onClick={this.props.handleAuthorPageChange}>
                            <i className={`iconfont icon-spin`}></i>
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
        recommend_authors_list: state.get('home').get('recommend_authors_list'),
        authors_page: state.get('home').get('authors_page'),
        authors_perpage: state.get('home').get('authors_perpage'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAuthorPageChange(e) {
            e.preventDefault()
            console.log('test')
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)