import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    title: '',
    content: '',
    author_name: '',
    author_avatar: '',
    diamond: '',
    datetime: '',
    word_count: '',
    readed: '',
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
                author_name: action.author_name,
                author_avatar: action.author_avatar,
                diamond: action.diamond,
                datetime: action.datetime,
                word_count: action.word_count,
                readed: action.readed,
            })
        default:
            return state
    }
}

export default reducer