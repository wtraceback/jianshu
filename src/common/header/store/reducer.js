import * as actionTypes from './actionTypes.js'

const defaultState = {
    focused: false,
}

const reducer = (state=defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === actionTypes.SEARCH_FOCUS) {
        newState.focused = true
        return newState
    }

    if (action.type === actionTypes.SEARCH_BLUR) {
        newState.focused = false
        return newState
    }

    return state
}

export default reducer