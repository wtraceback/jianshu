import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../store'

import styles from './index.module.css'

class List extends Component {
    render() {
        return (
            <div className={styles.list}>
                <div className={styles.list_container}>
                    <ul className={styles.note_list}>
                        {
                            this.props.article_list.map((item, index) => {
                                return (
                                    <li className={item.get('imgUrl') === '' ? '' : styles.have_img}
                                        key={index}
                                        // key={item.get('id')}
                                    >
                                        {
                                            item.get('imgUrl') === '' ? '' : (
                                                <a className={styles.wrap_img} href="/" target="_blank">
                                                    <img src={item.get('imgUrl')} alt={item.get('imgAlt')} />
                                                </a>
                                            )
                                        }

                                        <div className={styles.content}>
                                            <a className={styles.title} target="_blank" href="/">
                                                { item.get('title') }
                                            </a>
                                            <p className={styles.abstract}>
                                                { item.get('abstract') }
                                            </p>
                                            <div className={styles.meta}>
                                                <span className={styles.jsd_meta}>
                                                    <i className="iconfont icon-diamond1"></i>
                                                    { item.get('jsd_meta') }
                                                </span>
                                                <a className={styles.nickname} target="_blank" href="/">
                                                    { item.get('nickname') }
                                                </a>
                                                <a target="_blank" href="/">
                                                    <i className="iconfont icon-FontAwesomecommentaltsolid1"></i>
                                                    { item.get('commentNum') }
                                                </a>
                                                <span>
                                                    <i className="iconfont icon-home_ico_like-"></i>
                                                    { item.get('like') }
                                                </span>
                                                <span>
                                                    <i className="iconfont icon-shang"></i>
                                                    { item.get('reward') }
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <a data-page="3" href="/" className={styles.load_more}
                    onClick={(e) => {e.preventDefault();this.props.handleGetMoreList()}}
                >
                    阅读更多
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article_list: state.get('home').get('article_list'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetMoreList() {
            dispatch(actionCreators.getMoreList())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
