import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Icon, Layout, Avatar, Badge } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, avatar, menuToggle, loginOut } = props
    const menu = (
        <Menu>
            <Menu.ItemGroup title='用户设置'>
                <Menu.Divider />
                <Menu.Item>
                    <Icon type='edit' />
                    个人设置
                </Menu.Item>
                <Menu.Item>
                    <Icon type='setting' theme='filled' />
                    系统设置
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.Divider />
            <Menu.Item>
                <div onClick={loginOut}>
                    <Icon type='logout' /> 退出登录
                </div>
            </Menu.Item>
        </Menu>
    )
    return (
        <Header className='header'>
            <div className='left'>
                <Icon
                    style={{ fontSize: '20px' }}
                    onClick={menuClick}
                    type={menuToggle ? 'menu-unfold' : 'menu-fold'}
                />
            </div>
            <div className='center'>
                <CustomBreadcrumb arr={['表单', '基础表单']}></CustomBreadcrumb>
            </div>
            <div className='right'>
                <div className='mr15'>
                    <Badge dot={true} offset={[-2, 0]}>
                        <Icon type='bell' style={{ fontSize: '20px' }} />
                    </Badge>
                </div>
                <div>
                    <Dropdown overlay={menu} overlayStyle={{ width: '200px' }}>
                        <div className='ant-dropdown-link'>
                            <Avatar icon='user' src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}

AppHeader.propTypes = {
    menuClick: PropTypes.func,
    avatar: PropTypes.string,
    menuToggle: PropTypes.bool,
    loginOut: PropTypes.func
}

export default React.memo(AppHeader)
