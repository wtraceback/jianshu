import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    mouse_enter: false,
    login_status: false,
    authen_token: '',
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('mouse_enter', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouse_enter', false)
        case actionTypes.CHANGE_LOGIN_STATUS:
            return state.merge({
                'login_status': action.login_status,
                'authen_token': action.authen_token,
            })
        default:
            return state
    }
}

export default reducer