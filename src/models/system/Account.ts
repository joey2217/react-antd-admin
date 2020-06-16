export type Role = | "admin" | "user"

export enum Status {
  DISABLED,
  ENABLED,
}

export default class Account {
  id?: | number | string;
  username: string;
  account: string;
  status: Status;
  roles: Role[];
  constructor(username: string, account: string, status: number, roles: Role[], id?: string | number,) {
    this.username = username;
    this.account = account;
    this.status = status;
    this.roles = roles;
    this.id = id;
  }
}