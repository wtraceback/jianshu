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

const addMoreList = (list) => {
    return {
        type: actionTypes.ADD_ARTICLE_LIST,
        list: list,
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
        .catch((error) => {
            console.log(error);
        })
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
            .then((res) => {
                dispatch(addMoreList(res.data.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}