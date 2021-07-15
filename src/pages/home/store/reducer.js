import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    recommend_list: [],
    article_list: [],
    board_list: [],
    recommend_authors_list: [],
    authors_page: 0,
    authors_perpage: 5,
    article_page: 1,
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
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                'article_list': state.get('article_list').concat(fromJS(action.list)),
                'article_page': action.next_page,
            })
        default:
            return state
    }
}

export default reducer