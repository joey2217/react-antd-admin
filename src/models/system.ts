export type Role = | "admin" | "user"

export enum Status {
  DISABLED,
  ENABLED,
}

export class Account {
  id: number | string;
  username: string;
  account: string;
  status: Status;
  roles: Role[];
  constructor(id: string | number, username: string, account: string, status: number, roles: Role[]) {
    this.id = id;
    this.username = username;
    this.account = account;
    this.status = status;
    this.roles = roles;
  }
}