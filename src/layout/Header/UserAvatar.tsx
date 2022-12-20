import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {
  DownOutlined,
  GithubOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown, Space } from 'antd'
import { userInfoState } from '../../store/atom'
import { logout } from '../../api/login'
import { useMessage } from '../../context/message'
import type { MenuProps } from 'antd'

const UserAvatar: React.FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const message = useMessage()

  const items: MenuProps['items'] = [
    {
      label: <Link to="/">{t('home')}</Link>,
      icon: <HomeOutlined />,
      key: 'home',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/joey2217/react-antd-admin"
        >
          Github
        </a>
      ),
      icon: <GithubOutlined />,
      key: 'github',
    },
    {
      type: 'divider',
    },
    {
      label: t('logout'),
      icon: <LogoutOutlined />,
      key: 'logout',
    },
  ]

  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(`Click on item ${key}`)
    if (key === 'logout') {
      logout().then((res) => {
        setUserInfo(undefined)
        message.success(res.data.message)
        navigate('/login', { replace: true })
      })
    }
  }

  if (userInfo == null) {
    return null
  }

  return (
    <div>
      <Dropdown menu={{ items, onClick }}>
        <Space className="cursor-pointer">
          <Avatar src={userInfo.avatar} />
          <span>{userInfo.name}</span>
          <DownOutlined />
        </Space>
      </Dropdown>
    </div>
  )
}

export default memo(UserAvatar)
