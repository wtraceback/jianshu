import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './index.module.css'
import { actionCreators } from '../../store'

class BackTop extends Component {
    componentDidMount() {
        this.bindEvents()
    }

    componentWillUnmount() {
        this.removeEvents()
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.handleChangeShowBackTop)
    }

    removeEvents() {
        window.removeEventListener('scroll', this.props.handleChangeShowBackTop)
    }

    handleBackTop() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            this.props.show_back_top === true ? (
                <div className={styles.side_tool}>
                    <ul>
                        <li>
                            <a className={styles.function_button} href="/" onClick={(e) => {e.preventDefault();this.handleBackTop()}}>
                                <i className="iconfont icon-backtop-copy"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            ) : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        show_back_top: state.get('home').get('show_back_top')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeShowBackTop() {
            // if (document.documentElement.scrollTop >= 400) {
            if (window.scrollY >= 400) {
                dispatch(actionCreators.toggleShowBackTop(true))
            } else {
                dispatch(actionCreators.toggleShowBackTop(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackTop)