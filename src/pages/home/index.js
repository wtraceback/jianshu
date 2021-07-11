import React, { Component } from 'react'

import styles from './index.module.css'
import Banner from './components/Banner/index'
import List from './components/List/index'
import Recommend from './components/Recommend/index'
import Board from './components/Board/index'
import Author from './components/Author/index'

class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <Banner />
                        <Recommend />
                        <List />
                    </div>
                    <div className={styles.right}>
                        <Board />
                        <Author />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home