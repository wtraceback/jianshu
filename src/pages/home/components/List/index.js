import React, { Component } from 'react'

import styles from './index.module.css'

class List extends Component {
    render() {
        return (
            <div className={styles.list_container}>
                <ul className={styles.note_list}>
                    <li>
                        <div className={styles.content}>
                            <a className={styles.title} target="_blank" href="/">
                                写故事的恶魔
                            </a>
                            <p className={styles.abstract}>
                                那个人好奇怪，写故事写到入了魔，可别人问他，他又说不出这样写是为了什么。 “可是我觉得他写得挺好的啊！”一个小孩看了他的故事之后忍不住说道。
                            </p>
                            <div className={styles.meta}>
                                <span className={styles.jsd_meta}>
                                    <i className="iconfont icon-diamond1"></i>
                                    99.3
                                </span>
                                <a className={styles.nickname} target="_blank" href="/">也觉</a>
                                <a target="_blank" href="/">
                                    <i className="iconfont icon-FontAwesomecommentaltsolid1"></i> 
                                    27
                                </a>
                                <span>
                                    <i className="iconfont icon-home_ico_like-"></i> 
                                    161
                                </span>
                                <span>
                                    <i className="iconfont icon-shang"></i> 
                                    1
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.have_img}>
                        <a className={styles.wrap_img} href="/p/d3f0f072df23" target="_blank">
                            <img src="/api/images/delit_time.jpeg" alt="120" />
                        </a>

                        <div className={styles.content}>
                            <a className={styles.title} target="_blank" href="/">
                                写故事的恶魔
                            </a>
                            <p className={styles.abstract}>
                                那个人好奇怪，写故事写到入了魔，可别人问他，他又说不出这样写是为了什么。 “可是我觉得他写得挺好的啊！”一个小孩看了他的故事之后忍不住说道。
                            </p>
                            <div className={styles.meta}>
                                <span className={styles.jsd_meta}>
                                    <i className="iconfont icon-diamond1"></i>
                                    99.3
                                </span>
                                <a className={styles.nickname} target="_blank" href="/">也觉</a>
                                <a target="_blank" href="/">
                                    <i className="iconfont icon-FontAwesomecommentaltsolid1"></i> 
                                    27
                                </a>
                                <span>
                                    <i className="iconfont icon-home_ico_like-"></i> 
                                    161
                                </span>
                                <span>
                                    <i className="iconfont icon-shang"></i> 
                                    1
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List