export const TOKEN_KEY = 'authorization'

export type Role = | "admin" | "user"

enum Status {
  DISABLED,
  ENABLED,
}

export class Account {
  id: number;
  username: string;
  account: string;
  status: Status;
  roles: Role[];
  constructor(id: number, username: string, account: string, status: number, roles: Role[]) {
    this.id = id;
    this.username = username;
    this.account = account;
    this.status = status;
    this.roles = roles;
  }
}

export interface Auth {
  id: number;
  name: string;
  url: string;
  icon?: string;
  children?: Auth[];
}

export const authList: Auth[] = [
  {
    id: 1,
    url: "/home",
    name: "home",
    icon: 'DashboardOutlined',
  },
  {
    id: 2,
    url: "/table",
    name: "table",
    icon: 'TableOutlined',
  },
  {
    id: 3,
    url: "/form",
    name: "form",
    icon: 'FormOutlined',
  },
  {
    id: 4,
    url: "/system",
    name: "system",
    icon: 'SettingOutlined',
    children: [
      {
        id: 41,
        url: "/system/account",
        name: "account",
      },
      {
        id: 42,
        url: "/system/auth",
        name: "auth",
      },
      {
        id: 43,
        url: "/system/role",
        name: "role",
      },
    ]
  },
  {
    id: 5,
    url: "/menu",
    name: "menu",
    icon: 'MenuOutlined',
    children: [
      {
        id: 51,
        url: "/menu/menu1",
        name: "menu1",
        children: [
          {
            id: 511,

            url: "/menu/menu1/menu1-1",
            name: "menu11",
          },
          {
            id: 512,
            url: "/menu/menu1/menu1-2",
            name: "menu12",
          },
        ],
      },
      {
        id: 512,
        url: "/menu/menu2",
        name: "menu2",
      },
    ],
  },
]