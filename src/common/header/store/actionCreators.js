import axios from 'axios'
import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const changeSearchInfoList = (data) => ({
    type: actionTypes.SEARCH_INFO_LIST,
    data: fromJS(data),
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
})

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE,
})

export const searchInfoChange = (page) => ({
    type: actionTypes.SEARCH_INFO_CHANGE,
    page: page,
})

export const getSearchInfoList = () => {
    return (dispatch) => {
        axios.get('/api/searchInfoList.json')
            .then((res) => {
                dispatch(changeSearchInfoList(res.data.data))
            })
            .catch(() => {
                console.log('error')
            })
    }
}