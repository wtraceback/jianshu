import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './index.module.css'
import Banner from './components/Banner/index'
import List from './components/List/index'
import Recommend from './components/Recommend/index'
import Board from './components/Board/index'
import Author from './components/Author/index'
import BackTop from './components/BackTop/index'
import { actionCreators } from './store'

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
                    <BackTop />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.handleGetHomeData()
    }
}



const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetHomeData() {
            dispatch(actionCreators.getHomeData())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)