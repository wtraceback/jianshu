import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    mouse_enter: false,
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('mouse_enter', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouse_enter', false)
        default:
            return state
    }
}

export default reducer