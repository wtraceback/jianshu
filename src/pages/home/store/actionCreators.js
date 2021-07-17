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

const addMoreList = (list, next_page) => {
    return {
        type: actionTypes.ADD_ARTICLE_LIST,
        list: list,
        next_page: next_page,
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

export const getMoreList = (next_page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json', {
            params: {
                page: next_page
            }
        })
            .then((res) => {
                dispatch(addMoreList(res.data.data, next_page))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const toggleShowBackTop = (show_back_top) => {
    return {
        type: actionTypes.SHOW_BACK_TOP,
        show_back_top: show_back_top,
    }
}