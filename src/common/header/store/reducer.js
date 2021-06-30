import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes.js'

const defaultState = fromJS({
    focused: false,
    search_info_list: [],
})

const reducer = (state=defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused', true)
    }

    if (action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false)
    }

    if (action.type === actionTypes.SEARCH_INFO_LIST) {
        return state.set('search_info_list', action.data)
    }

    return state
}

export default reducer