import React, { memo } from 'react'
import { Menu } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../store/atom'
import type { IMenu } from '../../api/login'
import type { ItemType } from 'antd/es/menu/hooks/useItems'
import {
  DashboardOutlined,
  TableOutlined,
  FormOutlined,
  MenuOutlined,
  SettingOutlined,
  HighlightOutlined,
  LineChartOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

const menuIcons: { [prop: string]: any } = {
  DashboardOutlined: DashboardOutlined,
  TableOutlined: TableOutlined,
  FormOutlined: FormOutlined,
  MenuOutlined: MenuOutlined,
  SettingOutlined: SettingOutlined,
  HighlightOutlined: HighlightOutlined,
  LineChartOutlined: LineChartOutlined,
  EditOutlined: EditOutlined,
}

interface Props {
  theme?: 'dark' | 'light'
}

const AppMenu: React.FC<Props> = ({ theme = 'dark' }) => {
  const userInfo = useRecoilValue(userInfoState)
  const location = useLocation()
  const { t } = useTranslation()

  if (userInfo) {
    const traverseMenus = (menus: IMenu[]): ItemType[] => {
      const list: ItemType[] = menus.map((menu) => {
        if (menu.children && menu.children.length > 0) {
          return {
            key: menu.path,
            label: t(`menu.${menu.title}`),
            icon: menu.icon && React.createElement(menuIcons[menu.icon]),
            children: traverseMenus(menu.children),
          }
        } else {
          return {
            key: menu.path,
            icon: menu.icon && React.createElement(menuIcons[menu.icon]),
            label: <Link to={menu.path}>{t(`menu.${menu.title}`)}</Link>,
          }
        }
      })
      return list
    }

    const menuItems = traverseMenus(userInfo.menus)

    return (
      <Menu
        theme={theme}
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={menuItems}
      />
    )
  }
  return null
}

export default memo(AppMenu)
