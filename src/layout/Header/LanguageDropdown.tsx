import React, { memo } from 'react'
import { DownOutlined, GlobalOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import i18n from '../../i18n'

const onClick: MenuProps['onClick'] = ({ key }) => {
  console.log(`Click on item ${key}`)
  i18n.changeLanguage(key)
}

const items: MenuProps['items'] = [
  {
    label: '简体中文',
    key: 'zhCN',
  },
  {
    label: 'English',
    key: 'en',
  },
]

const LanguageDropdown: React.FC = () => {
  return (
    <Dropdown menu={{ items, onClick }}>
      <GlobalOutlined className="cursor-pointer" />
    </Dropdown>
  )
}

export default memo(LanguageDropdown)
