import React, { Component } from 'react'

import styles from './index.module.css'
import Article from './components/Article'

class Detail extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Article />
                        </div>
                        <div className={styles.right}>
                            hello world aside
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail