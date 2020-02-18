const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        title: '表单',
        key: '/form',
        icon: 'form',
        subs: [
            { title: '基础表单', key: '/form/base-form', icon: '' },
        ]
    },
    {
        title: '展示',
        key: '/show',
        icon: 'pie-chart',
        subs: [
            { title: '表格', key: '/show/table', icon: '' },
        ]
    },
]

export default menu
