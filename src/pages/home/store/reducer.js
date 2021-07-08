import { fromJS } from 'immutable'

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
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer