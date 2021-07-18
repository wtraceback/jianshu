import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
                                                <Link className={styles.wrap_img} to="/">
                                                    <img src={item.get('imgUrl')} alt={item.get('imgAlt')} />
                                                </Link>
                                            )
                                        }

                                        <div className={styles.content}>
                                            <Link className={styles.title} to={'/detail/' + item.get('id')}>
                                                { item.get('title') }
                                            </Link>
                                            <p className={styles.abstract}>
                                                { item.get('abstract') }
                                            </p>
                                            <div className={styles.meta}>
                                                <span className={styles.jsd_meta}>
                                                    <i className="iconfont icon-diamond1"></i>
                                                    { item.get('jsd_meta') }
                                                </span>
                                                <Link className={styles.nickname} to="/">
                                                    { item.get('nickname') }
                                                </Link>
                                                <Link to="/">
                                                    <i className="iconfont icon-FontAwesomecommentaltsolid1"></i>
                                                    { item.get('commentNum') }
                                                </Link>
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
                    onClick={(e) => {e.preventDefault();this.props.handleGetMoreList(this.props.article_page)}}
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
        article_page: state.get('home').get('article_page'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetMoreList(page) {
            dispatch(actionCreators.getMoreList(page + 1))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
