import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './index.module.css'

class Board extends Component {
    render() {
        return (
            <div className={styles.board}>
                {
                    this.props.board_list.map((item) => {
                        return (
                            <a target="_blank" href="/" key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt={item.get('imgAlt')} />
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board_list: state.get('home').get('board_list')
    }
}

const mapDispatchToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)