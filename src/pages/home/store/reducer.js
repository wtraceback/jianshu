import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    recommend_list: [
        {
            id: 1,
            title: '故事',
            imgUrl: '/api/images/recommend/story.jpg',
            // imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
        {
            id: 2,
            title: '读书',
            imgUrl: '/api/images/recommend/read.jpg',
            // imgUrl: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
        {
            id: 3,
            title: '手绘',
            imgUrl: '/api/images/recommend/hand_painted.jpg',
            // imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
        {
            id: 4,
            title: '摄影',
            imgUrl: '/api/images/recommend/photography.jpg',
            // imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
        {
            id: 5,
            title: '@IT·互联网',
            imgUrl: '/api/images/recommend/internet.jpg',
            // imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
        {
            id: 6,
            title: '自然科普',
            imgUrl: '/api/images/recommend/nature.jpg',
            // imgUrl: 'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
        {
            id: 7,
            title: '旅行·在路上',
            imgUrl: '/api/images/recommend/travel.png',
            // imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        },
    ],
    article_list: [
        {
            id: 1,
            title: '写故事的恶魔',
            abstract: '那个人好奇怪，写故事写到入了魔，可别人问他，他又说不出这样写是为了什么。 “可是我觉得他写得挺好的啊！”一个小孩看了他的故事之后忍不住说道。',
            jsd_meta: 99.3,
            nickname: '也觉',
            commentNum: 27,
            like: 161,
            reward: 1,
            imgUrl: '',
            imgAlt: '',
        },
        {
            id: 2,
            title: '写故事的恶魔',
            abstract: '那个人好奇怪，写故事写到入了魔，可别人问他，他又说不出这样写是为了什么。 “可是我觉得他写得挺好的啊！”一个小孩看了他的故事之后忍不住说道。',
            jsd_meta: 99.3,
            nickname: '也觉',
            commentNum: 27,
            like: 161,
            reward: 1,
            imgUrl: '/api/images/list/delit_time.jpeg',
            imgAlt: '',
        },
    ],
    board_list: [
        {
            id: 1,
            imgUrl: '/api/images/board/daily.png',
            imgAlt: 'Banner s daily',
        },
        {
            id: 2,
            imgUrl: '/api/images/board/club.png',
            imgAlt: 'Banner s club',
        },
        {
            id: 3,
            imgUrl: '/api/images/board/serialize.png',
            imgAlt: 'Banner s serialize',
        },
        {
            id: 4,
            imgUrl: '/api/images/board/copyright.png',
            imgAlt: 'Banner s copyright',
        },
    ],
    recommend_authors_list: [
        {
            id: 1,
            avatarUrl: '/api/images/author/lulushuo.png',
            author: '卢璐说',
            words: '2055.6k',
            like: '34.3k',
        },
        {
            id: 2,
            avatarUrl: '/api/images/author/xiaoguanjia.png',
            author: '简书钻首席小管家',
            words: '457.3k',
            like: '110.4k',
        },
        {
            id: 3,
            avatarUrl: '/api/images/author/wuxiaobu.png',
            author: '吴晓布',
            words: '740.9k',
            like: '25.3k',
        },
        {
            id: 4,
            avatarUrl: '/api/images/author/hobbit.png',
            author: 'Hobbit霍比特人',
            words: '422.5k',
            like: '1.9k',
        },
        {
            id: 5,
            avatarUrl: '/api/images/author/yehuli_.png',
            author: '野狐狸_',
            words: '394.6k',
            like: '6.4k',
        },
        {
            id: 6,
            avatarUrl: '/api/images/author/nianyuanhuairen.png',
            author: '念远怀人',
            words: '702.8k',
            like: '14.5k',
        },
        {
            id: 7,
            avatarUrl: '/api/images/author/dongkeping.png',
            author: '董克平日记',
            words: '1275.6k',
            like: '5.9k',
        },
        {
            id: 8,
            avatarUrl: '/api/images/author/kafka.png',
            author: '卢璐说',
            words: '216.4k',
            like: '4.3k',
        },
        {
            id: 9,
            avatarUrl: '/api/images/author/geliekenan.png',
            author: '格列柯南',
            words: '738.4k',
            like: '18.3k',
        },
        {
            id: 10,
            avatarUrl: '/api/images/author/lanyeshixiong.png',
            author: '澜夜师兄',
            words: '192.2k',
            like: '2k',
        },
    ],
    authors_page: 0,
    authors_perpage: 5,
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.RECOMMEND_AUTHORS_CHANGE:
            return state.set('authors_page', action.page)
        default:
            return state
    }
}

export default reducer