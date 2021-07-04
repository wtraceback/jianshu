import React, { Component } from 'react'

import styles from './index.module.css'
import Banner from './components/Banner/index'
import List from './components/List/index'
import Recommend from './components/Recommend/index'
import Topic from './components/Topic/index'
import Writer from './components/Writer/index'

class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <Banner />
                        <List />
                        <Recommend />
                    </div>
                    <div className={styles.right}>
                        <Topic />
                        <Writer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home