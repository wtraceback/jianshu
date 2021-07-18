import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = (data) => {
    return {
        type: actionTypes.CHANGE_DETAIL,
        title: data.title,
        content: data.content,
        author_name: data.author_name,
        author_avatar: data.author_avatar,
        diamond: data.diamond,
        datetime: data.datetime,
        word_count: data.word_count,
        readed: data.readed,
    }
}

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
            .then((res) => {
                const result = res.data.data
                dispatch(changeDetail(result))
            })
            .catch((error) => {
                console.log('/api/detail.json', error);
            })
    }
}