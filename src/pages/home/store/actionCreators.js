import axios from 'axios'

import * as actionTypes from './actionTypes'

const changeHomeData = (result) => {
    return {
        type: actionTypes.CHANGE_HOME_DATA,
        recommend_list: result.recommend_list,
        article_list: result.article_list,
        board_list: result.board_list,
        recommend_authors_list: result.recommend_authors_list,
    }
}

export const recommendAuthorsChange = (page) => ({
    type: actionTypes.RECOMMEND_AUTHORS_CHANGE,
    page: page,
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
        .catch(() => {
            console.log('error catch');
        })
    }
}