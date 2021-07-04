import React, { Component } from 'react'

import styles from './index.module.css'
import bannerImg from '../../../../statics/slam_dunk.jpg';

class Banner extends Component {
    render() {
        return (
            <div className={`${styles.carousel} ${styles.slide}`}>
                <div className={styles.carousel_inner}>
                    <div className={styles.banner} data-banner-name="首页图片栏">
                        <a target="_blank" href="/">
                            <img className={styles.banner_img} src={bannerImg} alt="540" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner