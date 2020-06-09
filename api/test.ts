import { NowRequest, NowResponse } from '@vercel/node'
import { Random } from "mockjs";

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send({
    query:request.query,
    data:request.body,
    cookies:request.cookies,
    name: Random.cname(),
    token: Random.guid(),
    message: '登录成功!'
  })
}