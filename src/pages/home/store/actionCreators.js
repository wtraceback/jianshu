import * as actionTypes from './actionTypes'

export const recommendAuthorsChange = (page) => ({
    type: actionTypes.RECOMMEND_AUTHORS_CHANGE,
    page: page,
})