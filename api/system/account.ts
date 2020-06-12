import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";
import { Account, Role } from "../type";

module.exports = (request: NowRequest, response: NowResponse) => {
  const { pageNum, pageSize } = request.query
  const list = []
  const roles: Role[] = ["admin", "user"];
  for (let i = 0; i < Number(pageSize); i++) {
    list.push(new Account(Random.name(), Random.last(), Random.integer(0, 1), roles.slice(Random.integer(0, 2), Random.integer(0, 2))))
  }
  response.status(200).json({
    message: '获取数据成功!',
    pageNum: Number(pageNum),
    pageSize: Number(pageSize),
    total: Random.integer(Number(pageSize), 100),
    list,
  })
};
