import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    recommend_list: [],
    article_list: [],
    board_list: [],
    recommend_authors_list: [],
    authors_page: 0,
    authors_perpage: 5,
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.RECOMMEND_AUTHORS_CHANGE:
            return state.set('authors_page', action.page)
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                recommend_list: fromJS(action.recommend_list),
                article_list: fromJS(action.article_list),
                board_list: fromJS(action.board_list),
                recommend_authors_list: fromJS(action.recommend_authors_list),
            })
        default:
            return state
    }
}

export default reducer