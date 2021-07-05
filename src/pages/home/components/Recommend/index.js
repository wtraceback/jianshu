import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './index.module.css'

class Recommend extends Component {
    render() {
        return (
            <div className={styles.recommend_collection}>
                {
                    this.props.recommend_list.map((item) => {
                        return (
                            <a className={styles.collection} target="_blank" href="/" key={item.get('id')}>
                                <img className={styles.collection_img} 
                                    src={item.get('imgUrl')} alt="64" 
                                />

                                <div className={styles.collection_name}>
                                    {item.get('title')}
                                </div>
                            </a>
                        )
                    })
                }

                <a className={styles.more_hot_collection} target="_blank" href="/">
                    更多热门专题 
                    <i className="iconfont icon-dayuhao"></i>
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommend_list: state.get('home').get('recommend_list'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
