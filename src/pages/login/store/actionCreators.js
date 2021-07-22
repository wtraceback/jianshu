import axios from 'axios'

import * as actionTypes from './actionTypes'

const changeLogin = (authen_token) => {
    return {
        type: actionTypes.CHANGE_LOGIN,
        login_status: true,
        authen_token: authen_token,
    }
}

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE,
})

export const login = (username, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?username=' + username + '&password=' + password)
            .then((res) => {
                const status = res.data.success
                if (status) {
                    // 改变登录的状态
                    dispatch(changeLogin(res.data.data.authen_token))
                } else {
                    console.log(res.data.msg)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const changeLogout = () => {
    return {
        type: actionTypes.CHANGE_LOGOUT,
    }
}