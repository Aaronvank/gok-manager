/**
 * Created by wenke.fan on 2020/2/24.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export let BtnAuth = BtnComponent =>
    class AuthComponent extends Component {
        construcor(props) {
            super(props)
        }

        static propTypes = {
            auth: PropTypes.string.isRequired
        }

        render() {
            // Todo 这里需写一个鉴权工具函数
            if (toolbar.getAuth(this.props.auth)) {
                return <BtnComponent {...this.props} />
            } else {
                return <ComposedComponent disabled={true} {...this.props} />
            }
        }
    }
