import React, { Component } from 'react'

import styles from './style.module.css'
import Banner from './components/Banner'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'

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