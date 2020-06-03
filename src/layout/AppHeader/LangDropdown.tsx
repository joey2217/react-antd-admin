import React from 'react';
import { GlobalOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { observer } from 'mobx-react'

import { useStore } from '../../store';
import { Lang } from '../../store/AppStore'

const langList = [
  {
    label: '简体中文',
    value: 'zh-CN'
  },
  {
    label: 'English',
    value: 'en'
  },
];

const LangDropdown = () => {

  const { appStore: { lang, switchLang } } = useStore();

  const menu = (
    <Menu onClick={({ key }) => switchLang(key as Lang)} selectedKeys={[lang]} >
      {
        langList.map(lang => <Menu.Item key={lang.value}>{lang.label}</Menu.Item>)
      }
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["hover", "click"]}>
      <div className="lang-dropdown action">
        <GlobalOutlined />
      </div>
    </Dropdown>
  )
}

export default observer(LangDropdown);
