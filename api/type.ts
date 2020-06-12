export const TOKEN_KEY = 'react-admin-request-token'

// Account

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