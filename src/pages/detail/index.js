import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './index.module.css'
import Article from './components/Article'
import Header from '../../common/header'

class Detail extends Component {
    render() {
        return (
            <>
                <Header />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <Article id={this.props.match.params.id} />
                            </div>
                            <div className={styles.right}>
                                hello world aside
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Detail)