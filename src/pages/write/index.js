import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import styles from './index.module.css'
import Header from '../../common/header'

class Write extends Component {
    render() {
        if (this.props.login_status) {
            return (
                <>
                    <Header />
                    <div className={styles.main}>
                        <div className={styles.container}>
                            <div className={styles.row}>
                                hello world
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login_status: state.get('login').get('login_status'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)