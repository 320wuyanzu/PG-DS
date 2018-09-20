module.exports = {
    base: '/PG-DS/',
    title: '数据结构(802)考试大纲',
    themeConfig: {
        lastUpdated: '最后一次编辑',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: '考纲', link: '/' },
            { text: '概述', link: '/1/' },
            { text: '线性数据结构', link: '/2/' },
            { text: '数组和广义表', link: '/3/' },
            { text: '树和二叉树', link: '/4/' },
            { text: '图', link: '/5/' },
            { text: '查找(检索)', link: '/6/' },
            { text: '排序', link: '/7/' },
            { text: '文件', link: '/8/' }
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    }
}


/**
 * 折叠式侧边栏
 */

function sidebar_group() {
    let A1 = {
        title: '一、概述',
        children: ['/1/']
    };
    let A2 = {
        title: '二、线性数据结构',
        children: ['/2/']
    };
    let A3 = {
        title: '三、数组和广义表',
        children: ['/3/']
    };
    let A4 = {
        title: '四、树和二叉树',
        children: ['/4/']
    };
    let A5 = {
        title: '五、图',
        children: ['/5/']
    };
    let A6 = {
        title: '六、查找(检索)',
        children: ['/6/']
    };
    let A7 = {
        title: '七、排序',
        children: ['/7/']
    };
    let A8 = {
        title: '八、文件',
        children: ['/8/']
    };
    return [A1, A2, A3, A4, A5, A6, A7, A8]
};