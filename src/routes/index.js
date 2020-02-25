import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))

// 表单
const FormBaseView = loadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/FormView/FormBaseView'))

// 展示
const TableView = loadable(() => import(/* webpackChunkName: 'table' */ '@/views/ShowView/Table'))

// 项目管理
const ProjectManange = loadable(() => import('@/views/ProjectManage/ProjectList')) //项目列表管理

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/form/base-form', exact: false, name: '表单', component: FormBaseView },
    { path: '/show/table', exact: false, name: '表格', component: TableView },
    { path: '/projectManage/projectList', exact: false, name: '项目列表管理', component: ProjectManange }
]

export default routes
