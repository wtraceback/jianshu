import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    focused: false,
    search_info_list: [],
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case actionTypes.SEARCH_INFO_LIST:
            return state.set('search_info_list', action.data)
        default:
            return state
    }
}

export default reducer