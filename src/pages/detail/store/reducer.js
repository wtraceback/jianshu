import { fromJS } from 'immutable'

import * as asctionTypes from './actionTypes'

const defaultState = fromJS({
    title: '写故事的恶魔',
    content: '<div class="image_package"><div class="image_container"><div class="image_container_fill"></div><div class="image_view"><img src="/api/images/article/ermo.png" alt=""/></div></div><div class="image_caption"></div></div><p>那个人好奇怪，写故事写到入了魔，可别人问他，他又说不出这样写是为了什么。<br/></p><p>“可是我觉得他写得挺好的啊！”一个小孩看了他的故事之后忍不住说道。</p><p>“谁叫你看他的故事的！”他家大人知道了勃然大怒。</p><p>小孩子被吓得不敢喘气，结果生生被憋死了。</p><p>“哎呀，我的儿啊！恶魔，该死的恶魔，为什么要写出这样有毒的故事！为什么要毒害我的儿！你快给我下到地狱。”孩子大人悲痛欲绝，并发出诅咒。</p><p>他本来正在写着他的新故事，突然一个冷颤，他从人间掉入了地狱。</p><p>“你害了别人的性命，所以你被人诅咒来到了这里。”判官拿着管事簿对他说道。</p><p>“可我只是在写故事啊，我都没有与太多人接触！”他不服。</p><p>“但你写的文却在不断与别人在接触，诅咒你的人认为你的文害了他们最重视的人。”判官说。</p><p>“他们不看不就好了？”</p><p>“可是你的文却不允许，这与它本身的欲望相违背。你写出来释放了它，它就具备自己的意识和欲望，它其中一个欲望就是希望被更多人看到，你不管它，它自己也在到处吸引着别人的注意。”</p><p>“那是它惹出来的事，关我什么事？”他不满地说道。</p><p>判官看了看故事的创作者，想了想，然后说道：“好像也对！”</p><p>接着判官大笔一挥，写故事的人就又回到了人世，但接下来他的故事却逐渐开始从人间消失。</p><div class="image_package"><div class="image_container"><div class="image_container_fill"></div><div class="image_view"><img src="/api/images/article/reading.png" alt=""/></div></div><div class="image_caption"></div></div><p>“你到底在干什么啊？”他身边的人开始问他。</p><p>“写故事。”他头也不抬地答道。</p><p>“写故事？什么故事，让我们看看。”旁人看他那么认真的写，很好奇。</p><p>“那么多，你随便看！”他轻描淡写地指着写作平台说道。</p><p>但旁人却什么也看不到。</p><p>“哪里有？你发出来啊！”</p><p>“哦？”我这才抬起头，看了看平台，记起自己从地狱回来的事。</p><p>“你这样写，别人都看不到，那有什么意义？”旁人忍不住问道。</p><p>“意义？要什么意义？别人看到了就有意义啦？”他问。</p><p>“呃……至少能换点关注，得点钱，赚点名气也好呀！你这样写，啥东西也没有，你图个啥？”旁人继续问。</p><p>“不知道，我只是想写。”他已经不愿再听旁人的问话，又重新埋下了头开始写。</p><p>“入了魔，真是。”旁人不理解，也不再理他。</p>',
    author_name: '也觉',
    author_avatar: '/api/images/article/author_avatar.png',
    diamond: '100',
    datetime: '2021.04.02 22:35:03',
    word_count: '1,224',
    readed: '5,616',
})

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer