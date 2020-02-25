const menu = [
    // {
    //     key: '/index',
    //     title: '首页',
    //     icon: 'home',
    //     auth: [1]
    // },
    {
        title: '项目管理',
        key: '/projectManage',
        icon: 'folder',
        subs: [
            { title: '项目列表管理', key: '/projectManage/projectList', icon: '' },
            { title: '项目人员管理', key: '/form/base-form', icon: '' },
            { title: '项目任务管理', key: '/form/base-form', icon: '' }
        ]
    },
    {
        title: '任务中心',
        key: '/show',
        icon: 'form',
        subs: [{ title: '表格', key: '/show/table', icon: '' }]
    },
    {
        title: '报表中心',
        key: '/index',
        icon: 'bar-chart',
        subs: [{ title: '表格', key: '/index', icon: '' }]
    },
    {
        title: '系统管理',
        key: '/index',
        icon: 'setting',
        subs: [{ title: '表格', key: '/show/table', icon: '' }]
    }
]

export default menu
