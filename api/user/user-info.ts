import { VercelRequest, VercelResponse } from '@vercel/node'
import { Random } from 'mockjs'
import { TOKEN_KEY } from '../type'

interface IMenu {
  path: string
  title: string
  icon?: any
  children?: Array<IMenu>
}

const menuList: Array<IMenu> = [
  {
    path: '/',
    title: 'home',
    icon: 'DashboardOutlined',
  },
  {
    path: '/table',
    title: 'table',
    icon: 'TableOutlined',
  },
  {
    path: '/form',
    title: 'form',
    icon: 'FormOutlined',
  },
  // {
  //   path: '/system',
  //   title: 'system',
  //   icon: 'SettingOutlined',
  //   children: [
  //     {
  //       path: '/system/account',
  //       title: 'account',
  //     },
  //     {
  //       path: '/system/auth',
  //       title: 'auth',
  //     },
  //     {
  //       path: '/system/role',
  //       title: 'role',
  //     },
  //   ],
  // },
  // {
  //   path: '/editor',
  //   title: 'editor',
  //   icon: 'HighlightOutlined',
  //   children: [
  //     {
  //       path: '/editor/flow',
  //       title: 'flow',
  //     },
  //     {
  //       path: '/editor/mind',
  //       title: 'mind',
  //     },
  //   ],
  // },
  // {
  //   path: '/charts',
  //   title: 'charts',
  //   icon: 'LineChartOutlined',
  //   children: [
  //     {
  //       path: '/charts/line',
  //       title: 'lineCharts',
  //     },
  //     {
  //       path: '/charts/common',
  //       title: 'commonCharts',
  //     },
  //   ],
  // },
  {
    path: '/text-editor',
    title: 'textEditor',
    icon: 'EditOutlined',
    children: [
      {
        path: '/text-editor/markdown',
        title: 'markdown',
      },
      {
        path: '/text-editor/rich-text',
        title: 'richText',
      },
    ],
  },
  {
    path: '/nested-menu',
    title: 'nestedMenu',
    icon: 'MenuOutlined',
    children: [
      {
        path: '/nested-menu/menu1',
        title: 'menu1',
        children: [
          {
            path: '/nested-menu/menu1/menu1-1',
            title: 'menu11',
          },
          {
            path: '/nested-menu/menu1/menu1-2',
            title: 'menu12',
          },
        ],
      },
      {
        path: '/nested-menu/menu2',
        title: 'menu2',
      },
    ],
  },
]

export default function handler(req: VercelRequest, res: VercelResponse) {
  const token = req.headers[TOKEN_KEY]
  if (token) {
    res.status(200).json({
      name: Random.last(),
      token: Random.guid(),
      userId: Random.natural(),
      message: '获取用户信息成功!',
      roles: ['admin', 'user'],
      avatar:
        'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      menus: menuList,
    })
  } else {
    res.status(403).json({
      message: '无权限!',
      token,
      headers: req.headers,
    })
  }
}
