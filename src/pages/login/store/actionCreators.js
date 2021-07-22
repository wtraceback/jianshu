import axios from 'axios'

import * as actionTypes from './actionTypes'

const changeLoginStatus = (authen_token) => {
    return {
        type: actionTypes.CHANGE_LOGIN_STATUS,
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
                    dispatch(changeLoginStatus(res.data.data.authen_token))
                } else {
                    console.log(res.data.msg)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}