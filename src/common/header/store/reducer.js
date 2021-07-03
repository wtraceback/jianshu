import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    focused: false,
    search_info_list: [],
    mouse_enter: false,
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case actionTypes.SEARCH_INFO_LIST:
            return state.set('search_info_list', action.data)
        case actionTypes.MOUSE_ENTER:
            return state.set('mouse_enter', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouse_enter', false)
        default:
        return state
    }
}

export default reducer